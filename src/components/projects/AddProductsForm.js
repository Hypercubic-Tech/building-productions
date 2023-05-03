import { useState } from "react";
import axiosInstance from "../../api/axios";

const AddProductForm = ({ setSelect, pushTempArray, type }) => {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    seler: "",
    price: "",
    unit: "",
    quantity: "",
    total: "",
    img: null,
  });

  const handleSubmit = async () => {
    setSelect(null);
    await axiosInstance.post("/api/product/create", formData).then((res) => {
      console.log(res);
    });
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
              style={{
                backgroundImage: "url(assets/media/avatars/blank.png)",
              }}
            >
              <div
                className="image-input-wrapper w-125px h-125px"
                style={{
                  backgroundImage: "url(assets/media/avatars/150-1.png)",
                }}
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
                    setFormData((formData) => ({
                      ...formData,
                      img: e.target.value,
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
                მიუთითეთ მხოლოდ:
                <a>png, jpg, jpeg.</a>
                ფორმატი!
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
                setFormData((formData) => ({
                  ...formData,
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
                setFormData((formData) => ({
                  ...formData,
                  seler: e.target.value,
                }));
              }}
              name="saler"
              className="form-select form-select-solid georgian"
              data-placeholder="მომწოდებელი"
            >
              <option value="გორგია">გორგია</option>
              <option value="ნოვა">ნოვა</option>
              <option value="დომინო">დომინო</option>
              <option value="ბრიკორამა">ბრიკორამა</option>
              <option value="ციტადელი">ციტადელი</option>
              <option value="მიჰაუსი">მიჰაუსი</option>
              <option value="სხვა">სხვა</option>
            </select>
            <div className="fv-plugins-message-container invalid-feedback"></div>
          </div>
          <div className="col-md-12 fv-row fv-plugins-icon-container">
            <label className="required fs-5 fw-bold mb-2 georgian">ლინკი</label>
            <input
              onChange={(e) => {
                setFormData((formData) => ({
                  ...formData,
                  address: e.target.value,
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
              name="count"
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
};

export default AddProductForm;
