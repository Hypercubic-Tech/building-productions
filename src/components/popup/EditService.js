import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProductState, setProducts } from '../../store/slices/productSlice';
import { setCategory } from "../../store/slices/categorySlice";

import notify from '../../utils/notify';

const EditService = ({
  product,
  unit,
  setSelect,
  craftStatus,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const projectId = router.query.projectId;
  const productId = product.id;
  
  const activeCategoryId = useSelector(state => state.cats.category);

  const [lossProduct, setLossProduct] = useState(false);
  const [filteredCrafts, setFilteredCrafts] = useState();
  const [craftImage, setCraftImage] = useState(product?.attributes?.craft_img_url);
  const [craftTitle, setCraftTitle] = useState(product?.attributes?.title);
  const [craftUnit, setCraftUnit] = useState(product?.attributes?.unit?.data?.id);
  const [craftStatusOption, setCraftStatusOption] = useState(product?.attributes?.craft_status?.data?.id);

  const [craftData, setCraftData] = useState({
    title: product?.attributes?.title,
    type: "service",
    quantity: product?.attributes?.quantity,
    unit: {
      connect: [{ id: product?.attributes?.unit?.data?.id }],
    },
    price: product.attributes.price,
    categories: {
      connect: [{ id: activeCategoryId }],
    },
    project: {
      connect: [{ id: projectId }]
    },
    craft_status: {
      connect: [{ id: product?.attributes?.craft_status?.data?.id }]
    },
    craft_img_url: product?.attributes?.craft_img_url
  });

  useEffect(() => {
    const getCraftsByCategory = async () => {
      await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/crafts?populate=categories,image&filters[categories][id][$eq]=${activeCategoryId}`)
        .then((res) => {
          const data = res.data;
          setFilteredCrafts(data)
        })
    }
    getCraftsByCategory();
  }, []);

  const defaultProductsHandler = async (id, pageIndex) => {
    if (id) {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[project][id]=${projectId}&filters[categories][id]=${id}`);
        const data = response.data;
        dispatch(setProducts(data.data));
        dispatch(setCategory(id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleCraftSubmit = async () => {
    try {
      await axios
        .put(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products/${productId}`, {
          data: craftData,
        })
        .then((res) => {
          const data = res.data;
          notify(false, "ხელობა დაემატა");
          dispatch(setProductState(data.data));
        })
    } catch (err) {
      notify(true, "ხელობის დამატება უარყოფილია, გთხოვთ შეავსოთ ყველა ველი");
      console.log(err);
    }
    defaultProductsHandler(activeCategoryId);
    setSelect(null);
  };


  return (
    <div
      style={{ display: "block", paddingLeft: "0px" }}
      className="modal fade show"
      id="kt_modal_export_users"
      role="dialig"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered mw-650px">
        <div className="modal-content">
          <div className="modal-header" id="kt_modal_add_user_header">
            <div
              className={` d-flex justify-content-center align-items-center w-100 p-2 `}
            >
              <h2>ხელობის რედაქტირება</h2>

            </div>
            <div
              className="btn btn-icon btn-sm btn-active-icon-primary"
              data-kt-users-modal-action="close"
            >
              <span
                className="svg-icon svg-icon-1"
                onClick={() => {
                  setSelect(null);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.5"
                    x={6}
                    y="17.3137"
                    width={16}
                    height={2}
                    rx={1}
                    transform="rotate(-45 6 17.3137)"
                    fill="black"
                  />
                  <rect
                    x="7.41422"
                    y={6}
                    width={16}
                    height={2}
                    rx={1}
                    transform="rotate(45 7.41422 6)"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div style={{ width: "90%" }} className="modal-body mx-5 mx-xl-15 my-7">
            <form id="kt_modal_add_user_form" className="form">
              <div
                className="d-flex flex-column pe-7"
                id="kt_modal_add_user_scroll"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_modal_add_user_header"
                data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                data-kt-scroll-offset="300px"
              >
                <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                  <div className='d-flex flex-stack flex-grow-1'>
                    {/* dasdasda */}
                    <img
                      src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${craftImage}`}
                      onError={(e) => {
                        e.target.src = "/images/test-img.png";
                      }}
                      width={125}
                      height={125}
                      style={{ borderRadius: "8px" }}
                      alt="Picture of the product"
                    />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className='w-100'>
                    <label className="required fs-5 fw-bold mb-2 georgian">
                      დასახელება
                    </label>
                    <select
                      onChange={(e) => {
                        const filteredArray = filteredCrafts?.data.filter(obj => obj?.attributes?.title === e.target.value);
                        setCraftImage(filteredArray[0].attributes.image.data.attributes.url);
                        setCraftTitle(e.target.value);
                        setCraftData((prevSendData) => ({
                          ...prevSendData,
                          title: e.target.value,
                          craft_img_url: filteredArray[0].attributes.image.data.attributes.url
                        }));
                      }}
                      name="count"
                      defaultValue={craftTitle}
                      className="form-select form-select-solid georgian"
                      data-placeholder="დასახელება"
                    >
                      <option value="none" disabled hidden > აირჩიეთ დასახელება</option>;+
                      {filteredCrafts &&
                        filteredCrafts?.data.map((item, index) => {
                          return (
                            <option key={item?.id + index} image={item?.attributes?.image.data.attributes.url} value={item?.attributes?.title}>
                              {item?.attributes?.title}
                            </option>
                          );
                        })
                      }
                    </select>
                  </div>
                  <div className="col-md-4 fv-row fv-plugins-icon-container">
                    <label className="required fs-5 fw-bold mb-2 georgian">
                      რაოდენობა
                    </label>
                    <input
                      onChange={(e) => {
                        setCraftData((prevSendData) => ({
                          ...prevSendData,
                          quantity: e.target.value,
                        }));
                      }}
                      defaultValue={craftData.quantity}
                      type="number"
                      className="form-control form-control-solid georgian"
                      placeholder="პრო: რაოდენობა"
                      name="quantity"
                    />
                    <div className="fv-plugins-message-container invalid-feedback"></div>
                  </div>
                  <div className="col-md-4 fv-row fv-plugins-icon-container">
                    <label className="required fs-5 fw-bold mb-2 georgian">
                      ერთეული
                    </label>
                    <select
                      onClick={(e) => {
                        setCraftUnit(e.target.value)
                        setCraftData((prevSendData) => ({
                          ...prevSendData,
                          unit: {
                            connect: [{ id: e.target.value }],
                          },
                        }));
                      }}
                      name="count"
                      defaultValue={craftUnit}
                      className="form-select form-select-solid georgian"
                      data-placeholder="საზომიერთ."
                    >
                      <option value="none" disabled hidden>აირჩიეთ ერთეული</option>
                      {unit &&
                        unit.map((u) => {
                          return (
                            <option key={u?.id} value={u?.id}>
                              {u?.attributes?.title}
                            </option>
                          );
                        })}
                    </select>
                    <div className="fv-plugins-message-container invalid-feedback"></div>
                  </div>
                  <div className="col-md-4 fv-row fv-plugins-icon-container">
                    <label className="required fs-5 fw-bold mb-2 georgian">
                      ღირეულება
                    </label>
                    <input
                      onChange={(e) => {
                        setCraftData((prevSendData) => ({
                          ...prevSendData,
                          price: e.target.value,
                        }));
                      }}
                      defaultValue={craftData.price}
                      type="number"
                      className="form-control form-control-solid georgian"
                      placeholder="პროდ: ღირებულება"
                      name="price"
                    />
                    <div className="fv-plugins-message-container invalid-feedback"></div>
                  </div>
                  <div className="w-100 col-md-4 fv-row fv-plugins-icon-container">
                    <label className="required fs-5 fw-bold mb-2 georgian">
                      სტატუსი
                    </label>
                    <select
                      onClick={(e) => {
                        setCraftStatusOption(e.target.value)
                        setCraftData((prevSendData) => ({
                          ...prevSendData,
                          craft_status: {
                            connect: [{ id: e.target.value }],
                          },
                        }));
                      }}
                      name="count"
                      defaultValue={craftStatusOption}
                      className="form-select form-select-solid georgian"
                      data-placeholder="დასახელება"
                    >
                      <option value="none" disabled hidden > აირჩიეთ სტატუსი</option>;
                      {craftStatus &&
                        craftStatus?.map((item, index) => {
                          return (
                            <option key={item?.id + index} value={item?.id}>
                              {item?.attributes?.title}
                            </option>
                          );
                        })}
                    </select>
                    <div className="fv-plugins-message-container invalid-feedback"></div>
                  </div>
                </div>
              </div>
              {lossProduct && <p style={{ color: 'red' }}>შეავსეთ ყველა (*) ველი!!!</p>}
              <div className="text-center pt-15">
                <button
                  onClick={() => {
                    setSelect(null);
                  }}
                  type="reset"
                  className="btn btn-light me-3"
                  data-kt-users-modal-action="cancel"
                >
                  გაუქმება
                </button>
                <div
                  onClick={handleCraftSubmit}
                  type="submit"
                  className="btn btn-primary"
                  data-kt-users-modal-action="submit"
                >
                  <span className="indicator-label">რედაქტირება</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditService;