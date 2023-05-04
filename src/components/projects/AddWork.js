import { useState, useEffect } from "react";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

import styles from "./AddWork.module.css";

function AddWork({ setSelect }) {
  const axiosPrivate = useAxiosPrivate();

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCraft, setSelectedCraft] = useState(null);
  const [showInputs, setShowInputs] = useState(false);
  const [crafts, setCrafts] = useState(null);
  const [services, setServices] = useState(null);
  const [formData, setFormData] = useState({
    type: "service",
    title: "",
    supplier: "",
    link: "",
    quantity: "",
    unit: "",
    price: "",
    image: "",
    purchased: "",
    status: "",
  });

  useEffect(() => {
    if (
      selectedOption === "64478f2a42be719665d1e247" ||
      selectedOption === ""
    ) {
      setShowInputs(false);
    } else {
      setShowInputs(true);
    }
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedCraft(crafts.find((craft) => craft._id === event.target.value));
  };

  useEffect(() => {
    const getDataHandler = async () => {
      await axiosPrivate
        .get("/api/admin/content/get_crafts", {})
        .then((res) => {
          let data = res.data;
          setCrafts(data);
        })
        .catch((e) => {
          console.log(e, "error");
        });
    };
    getDataHandler();
  }, []);

  const handleSubmit = async () => {
    setSelect(null);
    console.log(formData)
    await axiosPrivate
      .post("/api/admin/product/add_product", {
        formData,
      })
      .then((res) => {
        const data = res.data;
      })
      .catch((e) => {
        console.log(e, "error");
      });
  };

  console.log(crafts, 'crafts')
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
          {selectedCraft && (
            <div className={styles.imageBox}>
              <img
                onChange={(e) =>
                  setFormData((formData) => ({
                    ...formData,
                    image: e.target.files[0],
                  }))
                }
                src={selectedCraft.image}
                alt="img"
              />
            </div>
          )}
          <div className="col-md-8 fv-row fv-plugins-icon-container">
            <label className="required fs-5 fw-bold mb-2 georgian">
              კატეგორია
            </label>
            <select
              onChange={(e) => {
                handleOptionChange(e);
                setFormData((formData) => ({
                  ...formData,
                  category: e.target.value,
                }));
              }}
              name="category"
              className="form-select form-select-solid georgian"
            >
              {crafts &&
                crafts.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.category}
                    </option>
                  );
                })}
            </select>
            <div className="fv-plugins-message-container invalid-feedback"></div>
          </div>
          {selectedCraft && (
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
                  onChange={(e) => {
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
                  onChange={(e) => {
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
                    defaultValue={"not purchased"}
                    onChange={(e) => {
                      setFormData((formData) => ({
                        ...formData,
                        purchased: "purchased",
                      }));
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="text-center pt-15">
        <button
          onChange={() => {
            setSelect(null);
          }}
          type="reset"
          className="btn btn-light me-3"
          data-kt-users-modal-action="cancel"
        >
          Discard
        </button>
        <div
          onClick={handleSubmit}
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
