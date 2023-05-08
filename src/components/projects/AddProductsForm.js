import { useState, useEffect } from "react";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import axios from "axios";

const AddProductForm = ({ projectId, setSelect, unit, category, suppliers }) => {
  const axiosPrivate = useAxiosPrivate();

  const [productData, setProductData] = useState(
    {
      data: {
        image: "",
        title: "",
        supplier: {
          connect: [
            { id: null}
          ]
        },
        productLink: "",
        quantity: 0,
        unit: {
          connect: [
            { id: null }
          ]
        },
        price: 0,
        category: {
          connect: [
            { id: null }
          ]
        }
      }
    }
  );

  const handleSubmit = async () => {
    try {
        await axios.post('http://localhost:1337/api/products', {
        data: productData
      })
      .then((res) => {
        console.log(res)
      })
    } catch (err) {
      console.log(err)
    }

    setSelect(null);
  };

  return (
    <form id="kt_modal_add_user_form" className="form">
      <div
        className="d-flex flex-column scroll-y me-n7 pe-7"
        id="kt_modal_add_user_scroll"
        data-kt-scroll="true"
        data-kt-scroll-activate="{default: false, lg: true}"
        data-kt-scroll-max-height="auto"
        data-kt-scroll-dependencies="#kt_modal_add_user_header"
        data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
        data-kt-scroll-offset="300px"
      >
        <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
          <span className="svg-icon svg-icon-2tx svg-icon-warning me-4">
            <div
              className="image-input image-input-outline"
              data-kt-image-input="true"
              // style={{
              //   backgroundImage: "url(assets/media/avatars/blank.png)",
              // }}
            >
              <div
                className="image-input-wrapper w-125px h-125px"
                // style={{
                //   backgroundImage: productData.image,
                // }}
              />
              <label
                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                data-kt-image-input-action="change"
                data-bs-toggle="tooltip"
                title="Change avatar"
              >
                <i className="bi bi-pencil-fill fs-7" />
                <input
                  onChange={(e) => {
                    setProductData((prevSendData) => ({
                      ...prevSendData,
                      image: e.target.files,
                    }));
                  }}
                  type="file"
                  name="avatar"
                  accept=".png, .jpg, .jpeg"
                />
                <input type="hidden" name="avatar_remove" />
              </label>
              <span
                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                data-kt-image-input-action="cancel"
                data-bs-toggle="tooltip"
                title="Cancel avatar"
              >
                <i className="bi bi-x fs-2" />
              </span>
              <span
                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                data-kt-image-input-action="remove"
                data-bs-toggle="tooltip"
                title="Remove avatar"
              >
                <i className="bi bi-x fs-2" />
              </span>
            </div>
          </span>
          <div className="d-flex flex-stack flex-grow-1">
            <div className="fw-bold">
              <h4 className="text-gray-900 fw-bolder georgian">სურათი</h4>
              <div className="fs-6 text-gray-700 georgian">
                აირჩიეთ მხოლოდ ერთი სურათი
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-8 fv-row fv-plugins-icon-container">
            <label className="required fs-5 fw-bold mb-2 georgian">
              დასახელება
            </label>
            <input
              onChange={(e) => {
                setProductData((prevSendData) => ({
                  ...prevSendData,
                  title: e.target.value,
                }));
              }}
              type="text"
              className="form-control form-control-solid georgian"
              placeholder="პროდუქციის დასახელება"
              name="title"
            />
            <div className="fv-plugins-message-container invalid-feedback"></div>
          </div>
          <div className="col-md-4 fv-row fv-plugins-icon-container">
            <label className="required fs-5 fw-bold mb-2 georgian">
              მომწოდებელი
            </label>
            <select
              onClick={(e) => {
                setProductData((prevSendData) => ({
                  ...prevSendData,
                  supplier: {
                    connect: [
                      { id: e.target.value}
                    ]
                  }
                }));
              }}
              name="saler"
              className="form-select form-select-solid georgian"
              data-placeholder="მომწოდებელი"
            >
              {suppliers && suppliers.map((sup) => {
                  <option value="none" selected disabled hidden></option>
                return (
                  <option key={sup?.id} value={sup?.id}>{sup?.attributes?.title}</option>
                )
              })}
            </select>
            <div className="fv-plugins-message-container invalid-feedback"></div>
          </div>
          <div className="col-md-12 fv-row fv-plugins-icon-container">
            <label className="required fs-5 fw-bold mb-2 georgian">ლინკი</label>
            <input
              onChange={(e) => {
                setProductData((prevSendData) => ({
                  ...prevSendData,
                  productLink: e.target.value,
                }));
              }}
              type="text"
              className="form-control form-control-solid georgian"
              placeholder="http://momwodebeli.ge"
              name="prodactElAddress"
            />
            <div className="fv-plugins-message-container invalid-feedback"></div>
          </div>
          <div className="col-md-4 fv-row fv-plugins-icon-container">
            <label className="required fs-5 fw-bold mb-2 georgian">
              რაოდენობა
            </label>
            <input
              onChange={(e) => {
                setProductData((prevSendData) => ({
                  ...prevSendData,
                  quantity: e.target.value,
                }));
              }}
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
                setProductData((prevSendData) => ({
                  ...prevSendData,
                  unit: {
                    connect: [
                      { id: e.target.value }
                    ]
                  }
                }));
              }}
              name="count"
              className="form-select form-select-solid georgian"
              data-placeholder="საზომიერთ."
            >
              {unit && unit.map((u) => {
                  <option value="none" selected disabled hidden></option>
                return (
                  <option key={u?.id} value={u?.id}>{u?.attributes?.title}</option>
                )
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
                setProductData((prevSendData) => ({
                  ...prevSendData,
                  price: e.target.value,
                }));
              }}
              type="number"
              className="form-control form-control-solid georgian"
              placeholder="პროდ: ღირებულება"
              name="price"
            />
            <div className="fv-plugins-message-container invalid-feedback"></div>
          </div>
          <div className="col-md-4 fv-row fv-plugins-icon-container">
            <label className="required fs-5 fw-bold mb-2 georgian">
              კატეგორია
            </label>
            <select
              onClick={(e) => {
                setProductData((prevSendData) => ({
                  ...prevSendData,
                  category: {
                    connect: [
                      { id: e.target.value }
                    ]
                  }
                }));
              }}
              name="count"
              className="form-select form-select-solid georgian"
              data-placeholder="საზომიერთ."
            >
              {category &&
                category.map((item) => {
                  <option value="none" selected disabled hidden></option>
                  return (
                    <option key={item?.id} value={item?.id} >
                      {item?.attributes?.title}
                    </option>
                  );
                })}
            </select>
            <div className="fv-plugins-message-container invalid-feedback"></div>
          </div>
          <div className="mt-8 col-md-4 fv-row fv-plugins-icon-container">
            <div className="form-check form-check-sm form-check-custom form-check-solid">
              <label className="required fs-5 fw-bold mb-2 georgian">
                შეძენილია
              </label>
              <input
                className="mx-2 form-check-input"
                type="checkbox"
                data-kt-check="true"
                data-kt-check-target="#kt_table_users .form-check-input"
                defaultValue={"not purchased"}
                onChange={(e) => {
                  setProductData((formData) => ({
                    ...formData,
                    purchased: "purchased",
                  }));
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-15">
        <button
          onClick={() => {
            setSelect(null);
          }}
          type="reset"
          className="btn btn-light me-3"
          data-kt-users-modal-action="cancel"
        >
          Discard
        </button>
        <div
          onClick={() => {
            handleSubmit();
          }}
          type="submit"
          className="btn btn-primary"
          data-kt-users-modal-action="submit"
        >
          <span className="indicator-label">Submit</span>
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;
