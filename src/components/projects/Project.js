import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { setCategory } from "../../store/slices/categorySlice";
import { setProducts } from "../../store/slices/productSlice";

import Filter from "./Filter";
import Products from "../products/Products";
import AddProduct from "../popup/AddProduct";
import Gallery from "../popup/Gallery";
import EditProduct from "../popup/EditProduct";
import EditService from "../popup/EditService";
import Drawings from "../popup/Drawings";
import ExportSvg from "../svg/ExportSvg";
import Search2Svg from "../svg/Search2Svg";
import LinerSvg from "../svg/LinerSvg";
import AddSvg from "../svg/AddSvg";
import MapSvg from "../svg/MapSvg";
import CopySvg from "../svg/CopySvg";

import styles from "./Project.module.css";

const Project = ({
  isLoggedIn,
  sharedLink,
  project,
  crafts,
  unit,
  suppliers,
  craftStatus,
  allProduct,
  projectCategory,
  editHandler,
  editProductItem,
  productOptions,
  productStatus,
  defaultImage,
  getProjectById,
  allowedExport,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { projectId } = router.query;

  const products = useSelector((state) => state.prod.products);
  const activeCategoryId = useSelector((state) => state?.cats?.category);

  const [select, setSelect] = useState(null);
  const [totalSum, setTotalSum] = useState(false);
  const [searchType, setSearchType] = useState("");

  const handleSearchChange = (e) => {
    setSearchType(e.target.value);
  };
  const totalSumTable = () => {
    setTotalSum(true);
  };

  const defaultProductsHandler = async (id) => {
    if (id) {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[project][id]=${projectId}&filters[categories][id]=${id}`
        );
        const data = response.data.data;
        dispatch(setProducts(data));
        dispatch(setCategory(id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const filterProductCategory = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[project][id]=${projectId}&filters[categories][id]=${id}`
      );
      const data = response.data;
      dispatch(setProducts(data.data));
      dispatch(setCategory(id));
      setTotalSum(false);
    } catch (error) {
      console.error(error);
    }
  };

  const total = products.reduce((acc, product) => {
    const productTotal =
      product?.attributes?.price * product?.attributes?.quantity;
    return acc + productTotal;
  }, 0);

  const allowanceChecker = () => {
    setSelect("add");
  };

  useEffect(() => {
    const defaultProductCallBack = async () => {
      if (activeCategoryId && projectId) {
        await defaultProductsHandler(activeCategoryId);
      }
    };
    defaultProductCallBack();
  }, [activeCategoryId, projectId]);

  return (
    <>
      {project &&
        project.map((p, index) => {
          const id = p?.attributes?.main_img_id;
          const imgId = parseInt(id);
          const imageWithMainId = p?.attributes?.image?.data?.find(
            (image) => image.id === imgId
          );

          return (
            <div key={index} className={styles.toolbarContainer}>
              <img
                src={
                  (imageWithMainId &&
                    process.env.NEXT_PUBLIC_BUILDING_URL +
                    imageWithMainId?.attributes?.url) ||
                  (p?.attributes?.image?.data?.[0]?.attributes?.url &&
                    process.env.NEXT_PUBLIC_BUILDING_URL +
                    p?.attributes?.image?.data?.[0]?.attributes?.url) ||
                  "/images/test-img.png"
                }
                alt="main-photo"
                className={styles.toolbarImg}
              />
              <div className={`${styles.toolbarDesc}`}>
                <div className={`container ${styles.toolbarDescContainer}`}>
                  <div className="page-title d-flex flex-column me-3">
                    <h1 className="geo-title">{p?.attributes?.title}</h1>
                    <h2
                      className={`d-flex fw-bolder my-1 fs-3 geo-title ${styles.toolbarAddress}`}
                    >
                      <MapSvg />
                      &nbsp;{p?.attributes?.address}
                    </h2>
                    <ul className="breadcrumb breadcrumb-dot fw-bold text-gray-600 fs-7 my-1">
                      <li className="breadcrumb-item text-gray-600 georgian">
                        {p?.attributes?.city?.data?.attributes?.city}
                      </li>
                      <li className="breadcrumb-item text-gray-600 georgian">
                        {p?.attributes?.property_type?.data?.attributes?.title}
                      </li>
                      <li className="breadcrumb-item text-gray-600 georgian">
                        {p?.attributes?.condition?.data?.attributes?.title}
                      </li>
                      <li className="breadcrumb-item text-gray-600 georgian">
                        {
                          p?.attributes?.current_condition?.data?.attributes
                            ?.title
                        }
                      </li>
                      <li className="breadcrumb-item text-gray-600 georgian">
                        {p?.attributes?.area} მ2
                      </li>
                      <li className="breadcrumb-item text-gray-600 georgian">
                        {new Date(p?.attributes?.createdAt)
                          .toISOString()
                          .slice(0, 10)}
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex align-items-center py-2 py-md-1">
                    <div
                      className="me-3"
                      onClick={() => {
                        setSelect("gallery");
                      }}
                    >
                      <a
                        className="btn btn-light-primary fw-bolder georgian geo-title"
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
                    <div
                      className="d-flex align-items-center py-2 py-md-1"
                      onClick={() => {
                        setSelect("dranings");
                      }}
                    >
                      <a
                        className="btn btn-primary fw-bolder georgian geo-title"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_create_app"
                        id="kt_toolbar_primary_button"
                      >
                        <LinerSvg />
                        ნახაზები
                      </a>
                    </div>
                    <div
                      style={{marginLeft: '0.75rem'}}
                      className="d-flex align-items-center py-2 py-md-1"
                      onClick={() => {
                        setSelect("dranings");
                      }}
                    >
                      <a
                        className="btn btn-primary fw-bolder georgian geo-title "
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_create_app"
                        id="kt_toolbar_primary_button"
                      >
                        <CopySvg />
                        გაზიარება
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <Filter
        totalSumOnClick={totalSumTable}
        filterProductCategory={filterProductCategory}
        projectCategory={projectCategory}
      />
      <div id="kt_content_container" className={`container`}>
        <div className="card">
          <div className="card-header border-0 pt-6">
            <div className="card-title">
              {activeCategoryId === null ? (
                ""
              ) : (
                <div className="d-flex align-items-center position-relative my-1">
                  <span className="svg-icon svg-icon-1 position-absolute ms-6">
                    <Search2Svg />
                  </span>
                  <input
                    type="text"
                    value={searchType}
                    onChange={(e) => handleSearchChange(e)}
                    data-kt-user-table-filter="search"
                    className="form-control form-control-solid w-250px ps-14 georgian"
                    placeholder="ძებნა"
                  />
                </div>
              )}
            </div>
            <div className="card-toolbar">
              <div
                className="d-flex justify-content-end"
                data-kt-user-table-toolbar="base"
              >
                {activeCategoryId === null ? (
                  <button
                    type="button"
                    onClick={() => {
                      allowedExport && setSelect("exportPopUp");
                    }}
                    className={`${"btn btn-light-primary me-3 georgian"} ${!allowedExport && styles.disabledBtn
                      }`}
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_export_users"
                  >
                    <span className="svg-icon svg-icon-2">
                      <ExportSvg />
                    </span>
                    <b>ექსპორტი</b>
                  </button>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <button
                      type="button"
                      onClick={allowanceChecker}
                      className={`btn btn-primary georgian`}
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_add_user"
                    >
                      <AddSvg />
                      <b className="geo-title">დამატება</b>
                    </button>
                  </div>
                )}
              </div>
              {select === "gallery" && (
                <Gallery
                  getProjectById={getProjectById}
                  setSelect={setSelect}
                />
              )}
              {select === "dranings" && (
                <Drawings
                  getProjectById={getProjectById}
                  setSelect={setSelect}
                />
              )}
              {select === "add" && (
                <AddProduct
                  getProjectById={getProjectById}
                  project={productOptions}
                  setSelect={setSelect}
                  productStatus={productStatus}
                  craftStatus={craftStatus}
                  crafts={crafts}
                  unit={unit}
                  allCategories={projectCategory}
                  suppliers={suppliers}
                />
              )}
              {select === "edit-product" && (
                <EditProduct
                  product={editProductItem}
                  setSelect={setSelect}
                  craftStatus={craftStatus}
                  productStatus={productStatus}
                  crafts={crafts}
                  unit={unit}
                  allCategories={projectCategory}
                  suppliers={suppliers}
                />
              )}
              {select === "edit-service" && (
                <EditService
                  product={editProductItem}
                  setSelect={setSelect}
                  craftStatus={craftStatus}
                  crafts={crafts}
                  unit={unit}
                  allCategories={projectCategory}
                  suppliers={suppliers}
                />
              )}
            </div>
          </div>
          <div className="card-body pt-0">
            <Products
              getProjectById={getProjectById}
              defaultImage={defaultImage}
              productStatus={productStatus}
              projectId={projectId}
              craftStatus={craftStatus}
              editHandler={editHandler}
              allProduct={allProduct}
              setSelect={setSelect}
              totalSum={totalSum}
              searchType={searchType}
              select={select}
              total={total}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
