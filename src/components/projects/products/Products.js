import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

import EditProduct from "../../popup/EditProduct";
import EditService from "../../popup/EditService";
import notify from "../../../utils/notify";
import Link from "next/link";

import styles from "./Products.module.css";

const Products = ({ editHandler, filteredProducts, editProductItem, setSelect, craftStatus, crafts, unit, allCategories, suppliers, defaultProductsHandler, defaultP }) => {
  const [allProduct, setAllProduct] = useState(null);
  const [isTouched, setIsTouched] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [changeElement, setChangeElement] = useState();
  const router = useRouter();
  const { projectId } = router.query;

  const getProductsHandler = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[project][id][$eq]=${projectId}`
      )
      .then((res) => {
        const data = res.data;
        setAllProduct(data)
      })
  };

  useEffect(() => {
    const getProductId = async () => {
      try {
        const id = allProduct?.data[0]?.attributes?.categories?.data[0]?.id;

        if (!id) {
          setTimeout(getProductId, 1000);
        } else {
          defaultProductsHandler(id);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getProductId();
  }, [allProduct]);

  useEffect(() => {
    if (projectId) {
      getProductsHandler();
    };
  }, [projectId]);

  const editHandlerPopup = (product) => {
    console.log(product)

  };

  const confirmHandler = (productId) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'დაადასტურეთ, რომ გსურთ პროდუქტის წაშლა',
        text: 'დადასტურების შემთხვევაში, პროდუქტი წაიშლება ავტომატურად',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'წაშლა',
        cancelButtonText: 'უარყოფა',
        reverseButtons: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteProductHandler(productId);
          notify(false, "პროდუქტი წაიშალა")
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('ოპერაცია უარყოფილია', 'Error');
        }
      });
  };

  const deleteProductHandler = async (productId) => {
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products/${productId}`
      )
      .then(() => {
        getProductsHandler();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let element;
  const changeModalHandler = () => {
    if (!changeElement) {
      setChangeElement(true)
    } else (
      setChangeElement(false)
    )
  }

  return (
    <>
      <div className="table-responsive">
        <table
          className="table align-middle table-row-dashed fs-6 gy-5 borderBottom"
          id="kt_table_users"
        >
          <thead>
            <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
              <th className="w-10px pe-2">
                <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    data-kt-check="true"
                    data-kt-check-target="#kt_table_users .form-check-input"
                    defaultValue={1}
                  />
                </div>
              </th>
              {/* min-w-125px */}
              <th className="georgian">დასახელება</th>
              <th className="georgian">მომწოდებელი</th>
              <th className="georgian">რაოდენობა</th>
              <th className="georgian">ერთეული</th>
              <th className="georgian">ღირებულება</th>
              <th className="text-end min-w-100px georgian">ცვლილება</th>
            </tr>
          </thead>
          {!filteredProducts ? defaultP && defaultP.map((product) => {
            return (
              <tbody key={product?.id}>
                <tr>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={1}
                      />
                    </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3 m20">
                      <a href={product?.link}>
                        <div className="symbol-label georgian">
                          <img
                            src={
                              `${process.env.NEXT_PUBLIC_BUILDING_URL}` +
                              product?.attributes?.image?.data?.attributes
                                ?.url
                            }
                            alt=""
                            className="w-100"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column georgian">
                      <a
                        href={product?.link}
                        className="text-gray-800 text-hover-primary mb-1 georgian"
                      >
                        {product.title ? product?.title : product?.category}
                      </a>
                      <span>{product.supplier}</span>
                    </div>
                  </td>
                  <td className="georgian">
                    <a href={product?.attributes?.productLink}>
                      {product?.attributes?.supplier?.data?.attributes?.title}
                    </a>
                  </td>
                  <td className="georgian">
                    {product?.attributes?.quantity}
                  </td>
                  <td className="georgian">
                    {product?.attributes?.unit?.data?.attributes?.title}
                  </td>

                  <td className="georgian">{product?.attributes?.price}</td>
                  {/* <td className="georgian">
                    {parseInt(product?.attributes?.quantity) * parseFloat(product.attributes?.price)} 
                  </td> */}
                  <td
                    onClick={() => changeModalHandler()}
                    className={`${'text-end'} ${styles.changeModal}`}>
                    <div
                      className="menu-item px-3 padding8"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16"> <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /> </svg>
                    </div>
                    {changeElement ? (
                      <div className={styles.modal}>
                        <div
                          onClick={() => { editHandler(product); editHandlerPopup(product); setChangeElement(true) }}
                          className="menu-item px-3"
                        >
                          <a className="menu-link px-3 georgian padding0">
                            <i className="bi bi-pencil-fill" />
                            &nbsp;გადაკეთება
                          </a>
                        </div>
                        <div
                          onClick={() => { confirmHandler(product.id); setChangeElement(true) }}
                          className="menu-item px-3 padding8"
                        >
                          <a
                            className="menu-link px-3 georgian padding0"
                            data-kt-users-table-filter="delete_row"
                          >
                            <i className="bi bi-eraser-fill" />
                            &nbsp;წაშლა
                          </a>
                        </div>
                      </div>
                    ) : ""}
                  </td>
                </tr>
              </tbody>
            )
          }) : (
            ""
          )}
          {filteredProducts && (
            filteredProducts.map((product) => {
              return (
                <tbody key={product.id}>
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td className="d-flex align-items-center">
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3 m20">
                        <a href={product?.link}>
                          <div className="symbol-label georgian">
                            <img
                              src={
                                `${process.env.NEXT_PUBLIC_BUILDING_URL}` +
                                product?.attributes?.image?.data?.attributes
                                  ?.url
                              }
                              alt=""
                              className="w-100"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="d-flex flex-column georgian">
                        <a
                          // href="https://www.domino.com.ge/products/electrical-goods/cables-and-wires/cable-wire/%E1%83%99%E1%83%90%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-sakcable-%E1%83%9E%E1%83%A3%E1%83%9C%E1%83%9E-3x2.5-h03vvh2-u-h05vvh2-u/"
                          className="text-gray-800 text-hover-primary mb-1 georgian"
                        >
                          {product.title ? product?.title : product?.category}
                        </a>
                        <span>{product.supplier}</span>
                      </div>
                    </td>
                    <td className="georgian">
                      {product?.attributes?.unit?.data?.attributes?.title}
                    </td>
                    <td className="georgian">
                      {product?.attributes?.quantity}
                    </td>
                    <td className="georgian">{product?.attributes?.price}</td>
                    <td className="georgian">
                      {parseInt(product?.attributes?.quantity) * parseFloat(product.attributes?.price)}
                    </td>
                    <td className="text-end gap">
                      <div
                        onClick={() => { editHandler(product); editHandlerPopup(product) }}
                        className="menu-item px-3"
                      >
                        <a className="menu-link px-3 georgian padding0">
                          <i className="bi bi-pencil-fill" />
                          &nbsp;გადაკეთება
                        </a>
                      </div>
                      <div
                        onClick={(e) => deleteProductHandler(product.id)}
                        className="menu-item px-3 padding8"
                      >
                        <a
                          className="menu-link px-3 georgian padding0"
                          data-kt-users-table-filter="delete_row"
                        >
                          <i className="bi bi-eraser-fill" />
                          &nbsp;წაშლა
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )
            })
          )}
          {!projectId && (
            <tbody>
              <tr>
                <td>
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      {console.log(filteredProducts, 'filtered',)}
      {console.log(defaultP, 'defalt')}
      {editPopup && editProductItem.type ? "product"(
        <EditProduct product={editProductItem}
          setSelect={setSelect}
          craftStatus={craftStatus}
          crafts={crafts}
          unit={unit}
          allCategories={allCategories}
          suppliers={suppliers} />
      ) : ("")}
      {editPopup && editProductItem.type ? "service"(
        <EditService product={editProductItem}
          setSelect={setSelect}
          craftStatus={craftStatus}
          crafts={crafts}
          unit={unit}
          allCategories={allCategories}
          suppliers={suppliers} />
      ) : ("")}
    </>
  );
};

export default Products;