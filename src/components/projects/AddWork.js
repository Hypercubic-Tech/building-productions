import { useState, useEffect } from "react";
import axiosInstance from "../../api/axios";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

function AddWork({ setSelect }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [showInputs, setShowInputs] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const axiosPrivate = useAxiosPrivate();
  const [categories, setCategories] = useState(null);
  const [formData, setFormData] = useState({
    category: "",
    unit: "",
    quantity: "",
    total: "",
    status: "",
  });

  useEffect(() => {
    if (selectedOption !== "") {
      setShowInputs(true);
    } else {
      setShowInputs(false);
    }
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const getDataHandler = async () => {
      await axiosPrivate
        .get("/api/admin/content/get_categories", {})
        .then((res) => {
          let data = res.data;
          setCategories(data);
        })
        .catch((e) => {
          console.log(e, "error");
        });
    };
    getDataHandler();
  }, []);

  const handleSubmit = async () => {
    setSelect(null);
    await axiosInstance.post("/api/product/create", formData).then((res) => {
      console.log(res);
    });
  };

  console.log(categories);

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
        <div className="row mb-5">
          <div className="col-md-8 fv-row fv-plugins-icon-container">
            <label className="required fs-5 fw-bold mb-2 georgian">
              კატეგორია
            </label>
            <select
              onChange={handleOptionChange}
              onClick={(e) => {
                setFormData((formData) => ({
                  ...formData,
                  category: e.target.value,
                }));
              }}
              name="category"
              className="form-select form-select-solid georgian"
            >
              {categories?.map((item, i) => {
                return (
                  <option key={i} value="კატეგორია">
                    {item.category}
                  </option>
                );
              })}
            </select>
            <div className="fv-plugins-message-container invalid-feedback"></div>
          </div>
          {showInputs && (
            <>
              <div className="col-md-4 fv-row fv-plugins-icon-container">
                <label className="required fs-5 fw-bold mb-2 georgian">
                  რაოდენობა
                </label>
                <input
                  onChange={(e) => {
                    setFormData((formData) => ({
                      ...formData,
                      quantity: Number(e.target.value),
                    }));
                    setQuantity(e.target.value);
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
                    setFormData((formData) => ({
                      ...formData,
                      unit: e.target.value,
                    }));
                  }}
                  name="unit"
                  className="form-select form-select-solid georgian"
                  data-placeholder="საზომიერთ."
                >
                  <option value="კვ.მ">კვ.მ</option>
                  <option value="გრ.მ">გრ.მ</option>
                  <option value="ცალი">ცალი</option>
                  <option value="ლიტრი">ლიტრი</option>
                  <option value="ტომარა">ტომარა</option>
                </select>
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>
              <div className="col-md-4 fv-row fv-plugins-icon-container">
                <label className="required fs-5 fw-bold mb-2 georgian">
                  ღირეულება
                </label>
                <input
                  onChange={(e) => {
                    setFormData((formData) => ({
                      ...formData,
                      price: Number(e.target.value),
                    }));
                    setPrice(e.target.value);
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
                  სტატუსი
                </label>
                <select
                  onClick={(e) => {
                    setFormData((formData) => ({
                      ...formData,
                      status: e.target.value,
                    }));
                  }}
                  name="status"
                  className="form-select form-select-solid georgian"
                  data-placeholder="სტატუსი"
                >
                  <option value="არ დაწყებულა">არ დაწყებულა</option>
                  <option value="პროცესშია">პროცესშია</option>
                  <option value="დასრულდა">დასრულდა</option>
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
                    defaultValue={1}
                  />
                </div>
              </div>
            </>
          )}
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
            setFormData((formData) => ({
              ...formData,
              total: Number(price * quantity),
            }));
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
}

export default AddWork;
