import { useState, useEffect } from "react";

import axiosPrivate from "@/api/axiosPrivate";
import Products from "./Products";
import AddProductForm from "./AddProductsForm";
import AddWork from "./AddWork";
import Filter from "./Filter";
import EditProductsForm from "./EditProductsForm";
import EditServiceForm from "./EditServiceForm";
import axios from "axios";

const Project = ({ pr, unit, category, suppliers }) => {
  const [select, setSelect] = useState(null);
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [services, setServices] = useState(null);
  const [summary, setSummary] = useState(0);
  const [products, setProducts] = useState(null);
  const [editProduct, setEditProduct] = useState(false);
  const [editService, setEditService] = useState(false);
  const [editProductData, setEditProductData] = useState(null);
  const [editServiceData, setEditServiceData] = useState(null);
  const [allProduct, setAllProduct] = useState(null);

  const [filteredProducts, setFilteredProducts] = useState(null);
  const [productCategory, setProductCategory] = useState('');

  const giveProductCategory = (category) => {
    setProductCategory(category)
  };
  // console.log(pr._id)
  // const project = pr?.project._id;

  const handleShowSecond = () => {
    setShowFirst(false);
    setShowSecond(true);
  };

  const handleShowFirst = () => {
    setShowFirst(true);
    setShowSecond(false);
  };

  const filterProductCategory = async () => {
  try {
    await axiosPrivate.get(`/api/admin/product/get_filtered_products`, {
      params: {
        search: productCategory
      }
    })
    .then((res) => {
      const data = res.data;
      setFilteredProducts(data);
    })
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    const getProductsHandler = async() => {
      try {
        await axios.get('http://localhost:1337/api/products?populate=*')
        .then((res) => {
          const data = res.data;
          setAllProduct(data.data);
        })
      } catch (error) {
        console.error(error);
      }
    };

    const getDataHandler = async () => {
      await axiosPrivate
        .get("/api/admin/product/get_products", {})
        .then((res) => {
          let data = res.data;
          setProducts(data);
          let sum = 0;
          for (let i = 0; i < data.length; i++) {
            sum = sum + parseInt(data[i].quantity) * parseFloat(data[i].price);
          }
          setSummary(sum);
        })
        .catch((e) => {
          console.log(e, "error");
        });
    };
    getDataHandler();
    getProductsHandler();
  }, []);

  const editProductHandler = async (product) => {
    if (product.type === "product") {
      setEditProductData(product);
      if (!editProduct) {
        setEditProduct(true);
      } else {
        setEditProduct(false);
      }
    }

    if (product.type === "service") {
      setEditServiceData(product);
      if (!editService) {
        setEditService(true);
      } else {
        setEditService(false);
      }
    }
  };

  return (
    <>
      <Filter project={pr} giveProductCategory={giveProductCategory} filterProductCategory={filterProductCategory} />
      <div className="toolbar py-5 py-lg-5" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          className="container-xxl d-flex flex-stack flex-wrap"
        >
          <div className="page-title d-flex flex-column me-3">
            <h1 className="d-flex text-dark fw-bolder my-1 fs-3 georgian">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              &nbsp;{pr?.address}
            </h1>
            <ul className="breadcrumb breadcrumb-dot fw-bold text-gray-600 fs-7 my-1">
              <li className="breadcrumb-item text-gray-600 georgian">
                {pr?.city}
              </li>
              <li className="breadcrumb-item text-gray-600 georgian">
                {pr?.condition}
              </li>
              <li className="breadcrumb-item text-gray-600 georgian">
                {pr?.propertyType}
              </li>
              <li className="breadcrumb-item text-warning georgian">
                {pr?.createdAt}
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center py-2 py-md-1">
            <div className="me-3">
              <a
                href="#"
                className="btn btn-light-primary fw-bolder georgian"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <i className="bi bi-image-fill" />
                სურათები
              </a>
              <div
                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                data-kt-menu="true"
                id="kt_menu_61484d4eae1ca"
              ></div>
            </div>
            <div className="d-flex align-items-center py-2 py-md-1">
              <a
                href="#"
                className="btn btn-primary fw-bolder georgian"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_app"
                id="kt_toolbar_primary_button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-rulers"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                </svg>
                ნახაზები
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="row gy-0 gx-10">
            <div className="col-xl-12">
              <div className="mb-10">
                <div className="content flex-row-fluid" id="kt_content">
                  <div className="card">
                    <div className="card-header border-0 pt-6">
                      <div className="card-title">
                        <div className="d-flex align-items-center position-relative my-1">
                          <span className="svg-icon svg-icon-1 position-absolute ms-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.5"
                                x="17.0365"
                                y="15.1223"
                                width="8.15546"
                                height={2}
                                rx={1}
                                transform="rotate(45 17.0365 15.1223)"
                                fill="black"
                              />
                              <path
                                d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          <input
                            type="text"
                            data-kt-user-table-filter="search"
                            className="form-control form-control-solid w-250px ps-14 georgian"
                            placeholder="ძებნა"
                          />
                        </div>
                      </div>
                      <div className="card-toolbar">
                        <div
                          className="d-flex justify-content-end"
                          data-kt-user-table-toolbar="base"
                        >
                          <button
                            type="button"
                            className="btn btn-light-primary me-3"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                          >
                            <span className="svg-icon svg-icon-2 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <b className="georgian">ფილტრი</b>
                          </button>
                          <div
                            className="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
                            data-kt-menu="true"
                          >
                            <div className="px-7 py-5">
                              <div className="fs-5 text-dark fw-bolder">
                                Filter Options
                              </div>
                            </div>
                            <div className="separator border-gray-200" />
                            <div
                              className="px-7 py-5"
                              data-kt-user-table-filter="form"
                            >
                              <div className="mb-10">
                                <label className="form-label fs-6 fw-bold">
                                  Role:
                                </label>
                                <select
                                  className="form-select form-select-solid fw-bolder"
                                  data-kt-select2="true"
                                  data-placeholder="Select option"
                                  data-allow-clear="true"
                                  data-kt-user-table-filter="role"
                                  data-hide-search="true"
                                >
                                  <option />
                                  <option value="Administrator">
                                    Administrator
                                  </option>
                                  <option value="Analyst">Analyst</option>
                                  <option value="Developer">Developer</option>
                                  <option value="Support">Support</option>
                                  <option value="Trial">Trial</option>
                                </select>
                              </div>
                              <div className="mb-10">
                                <label className="form-label fs-6 fw-bold">
                                  Two Step Verification:
                                </label>
                                <select
                                  className="form-select form-select-solid fw-bolder"
                                  data-kt-select2="true"
                                  data-placeholder="Select option"
                                  data-allow-clear="true"
                                  data-kt-user-table-filter="two-step"
                                  data-hide-search="true"
                                >
                                  <option />
                                  <option value="Enabled">Enabled</option>
                                </select>
                              </div>
                              <div className="d-flex justify-content-end">
                                <button
                                  type="reset"
                                  className="btn btn-light btn-active-light-primary fw-bold me-2 px-6"
                                  data-kt-menu-dismiss="true"
                                  data-kt-user-table-filter="reset"
                                >
                                  Reset
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-primary fw-bold px-6"
                                  data-kt-menu-dismiss="true"
                                  data-kt-user-table-filter="filter"
                                >
                                  Apply
                                </button>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setSelect("export");
                            }}
                            className="btn btn-light-primary me-3 georgian"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_export_users"
                          >
                            <span className="svg-icon svg-icon-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x="12.75"
                                  y="4.25"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(90 12.75 4.25)"
                                  fill="black"
                                />
                                <path
                                  d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                                  fill="black"
                                />
                                <path
                                  d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                                  fill="#C4C4C4"
                                />
                              </svg>
                            </span>
                            <b>ეხპორტი</b>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setSelect("add");
                            }}
                            className="btn btn-primary georgian"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_add_user"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-send-plus-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                            <b>დამატება</b>
                          </button>
                        </div>
                        <div
                          className="d-flex justify-content-end align-items-center d-none"
                          data-kt-user-table-toolbar="selected"
                        >
                          <div className="fw-bolder me-5">
                            <span
                              className="me-2"
                              data-kt-user-table-select="selected_count"
                            />
                            Selected
                          </div>
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-kt-user-table-select="delete_selected"
                          >
                            Delete Selected
                          </button>
                        </div>
                        {/* ფილტრი */}
                        {select === "export" && (
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
                                <div className="modal-header">
                                  <h2 className="fw-bolder georgian">
                                    მონაცემების ამოღება
                                  </h2>
                                  <div
                                    className="btn btn-icon btn-sm btn-active-icon-primary"
                                    data-kt-users-modal-action="close"
                                  >
                                    <span className="svg-icon svg-icon-1">
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
                                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                  <form
                                    id="kt_modal_export_users_form"
                                    className="form"
                                    action="#"
                                  >
                                    <div className="fv-row mb-10">
                                      <label className="fs-6 fw-bold form-label mb-2 georgian">
                                        კატეგორია:
                                      </label>
                                      <select
                                        name="role"
                                        data-control="select2"
                                        data-placeholder="მონიშნეთ სამუშაოები"
                                        data-hide-search="true"
                                        className="form-select form-select-solid georgian"
                                      >
                                        <option />
                                        <option value={1}>ელექტროობა</option>
                                        <option value={2}>სანტექნიკა</option>
                                        <option value={3}>დემონტაჟი</option>
                                        <option value={4}>სამღებრო</option>
                                        <option value={5}>გათბობა</option>
                                        <option value={6}>კაფელ-მეტლახი</option>
                                        <option value={6}>ყველა</option>
                                      </select>
                                    </div>
                                    <div className="fv-row mb-10">
                                      <label className="required fs-6 fw-bold form-label mb-2 georgian">
                                        აირჩიეთ ფორმატი:
                                      </label>
                                      <select
                                        name="format"
                                        data-control="select2"
                                        data-placeholder="აირჩიეთ ფორმატი"
                                        data-hide-search="true"
                                        className="form-select form-select-solid georgian"
                                      >
                                        <option />
                                        <option value="excel">Excel</option>
                                        <option value="pdf">PDF</option>
                                        <option value="cvs">CVS</option>
                                        <option value="zip">ZIP</option>
                                      </select>
                                    </div>
                                    <div className="text-center">
                                      <button
                                        type="reset"
                                        className="btn btn-light me-3 georgian"
                                        data-kt-users-modal-action="cancel"
                                      >
                                        გამორთვა
                                      </button>
                                      <button
                                        type="submit"
                                        className="btn btn-primary"
                                        data-kt-users-modal-action="submit"
                                      >
                                        <span className="indicator-label georgian">
                                          გადმოწერა
                                        </span>
                                        <span className="indicator-progress georgian">
                                          გთხოვთ დაიცადოთ...
                                          <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                        </span>
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* ეხპორტი */}
                        {select === "add" && (
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
                                <div
                                  className="modal-header"
                                  id="kt_modal_add_user_header"
                                >
                                  <div
                                    className={` d-flex justify-content-center align-items-center w-100 p-2 `}
                                  >
                                    <div
                                      onClick={handleShowFirst}
                                      className={` ${showFirst ? "primary-focus" : ""
                                        } text-hover-primary mx-5 cursor-pointer `}
                                    >
                                      პროდუქციის დამატება
                                    </div>
                                    <div
                                      onClick={handleShowSecond}
                                      className={`${showSecond ? "primary-focus" : ""
                                        } text-hover-primary mx-5 cursor-pointer `}
                                    >
                                      ხელობის დამატება
                                    </div>
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
                                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                  {showFirst && (
                                    <AddProductForm
                                      suppliers={suppliers}
                                      unit={unit}
                                      category={category}
                                      projectId={"project"}
                                      setSelect={setSelect}
                                    />
                                  )}
                                  {showSecond && (
                                    <AddWork
                                      projectId={"project"}
                                      setSelect={setSelect}
                                    />
                                  )}
                                </div>
                                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                  {editProduct && (
                                    <EditProductsForm data={editProductData} />
                                  )}
                                  {editService && (
                                    <EditServiceForm data={editServiceData} />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <div className="summary">ჯამი: {summary} ლარი</div>
                      <Products
                        editHandler={editProductHandler}
                        products={products}
                        services={services}
                        filteredProducts={filteredProducts}
                        allProduct={allProduct}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
