import axios, { all } from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import EditProduct from "../../popup/EditProduct";
import EditService from "../../popup/EditService";
import { applyMiddleware } from "@reduxjs/toolkit";

const Products = ({ editHandler, filteredProducts, editProductItem, setSelect, craftStatus, crafts, unit, allCategories, suppliers, firstProducts, defaultProductsHandler, defaultP }) => {
  const [allProduct, setAllProduct] = useState(null);
  const [editPopup, setEditPopup] = useState(false);
  const [idD, setId] = useState("")
  const router = useRouter();
  const { projectId } = router.query;

  const getProductsHandler = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[project][id][$eq]=${projectId}`
      )
      .then((res) => {
        const data = res.data;
        const defaultFiltered = "ელექტროობა";
        setAllProduct(data)
        // console.log(data, 'data'); // Check the structure of data

        // Check the structure of the first item in the categories array
        console.log(data[0]?.attributes?.categories?.data[0]?.attributes?.title);

        const filteredProducts = data?.attributes?.categories?.data?.attributes.filter((product) => {
          return product.title === defaultFiltered;
        });
        console.log(filteredProducts, 'filteredProducts');

        // ...
      });
  };

  // allProduct: {
  //   data: [
  //     {
  //       attributes: {
  //         categories:
  //       }
  //     }
  //   ]
  // }

  // useEffect(() => {
  //   const getProductId = async () => {
  //     try {
  //       const id = allProduct?.data[0]?.attributes?.categories?.data[0]?.id;
  //       console.log(id, 'id');

  //       if (!id) {
  //         // If ID is not available, re-call the useEffect after a short delay
  //         setTimeout(getProductId, 1000);
  //       } else {
  //         // ID is available, proceed with defaultProductsHandler
  //         defaultProductsHandler(id);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   // Call getProductId initially
  //   getProductId();
  // }, []);

  useEffect(() => {
    const getDefaultProducts = async () => {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[project][id][$eq]=${projectId}`
        )
        .then((res) => {
          const data = res.data.data;
          console.log(data, 'default all data')
          console.log(data.map((item) => {
            item?.attributes
          }))
          const defaultProducts = data.filter((product) =>
            product.attributes?.categories?.data.some(
              (category) => category.id === product.attributes?.data?.category?.id
            )
          );
          console.log(defaultProducts, 'pf')
        });
    }

    getDefaultProducts();
  }, [])

  useEffect(() => {
    if (projectId) {
      getProductsHandler();
    };
  }, [projectId]);

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


  // const editHandlerPopup = () => {
  //   console.log(editProductItem, 'item')
  //   if (editPopup === false) {
  //     console.log('im here')
  //     setEditPopup(true)
  //   } else {
  //     setEditPopup(false)
  //   }
  // };

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
              <th className="georgian">სამუშაო</th>
              <th className="georgian">ერთეული</th>
              <th className="georgian">რაოდენობა</th>
              <th className="georgian">ღირებულება</th>
              <th className="georgian">ჯამი</th>
              <th className="text-end min-w-100px georgian">ცვლილება</th>
            </tr>
          </thead>
          {/* {allProduct && !filteredProducts?.length} */}
          {/* {defaultP?.length > 0 && !filteredProducts?.length && defaultP.map((product) => {
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
                        href="https://www.domino.com.ge/products/electrical-goods/cables-and-wires/cable-wire/%E1%83%99%E1%83%90%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-sakcable-%E1%83%9E%E1%83%A3%E1%83%9C%E1%83%9E-3x2.5-h03vvh2-u-h05vvh2-u/"
                        className="text-gray-800 text-hover-primary mb-1 georgian"
                      >
                        {product.title ? product?.title : product?.category}
                      </a>
                      <span>{product?.supplier}</span>
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
                    {parseInt(product?.attributes?.quantity) * parseFloat(product?.attributes?.price)}
                  </td>
                  <td className="text-end gap">
                    <div
                      onClick={() => { editHandler(product); setEditPopup(true); }}

                      className="menu-item px-3"
                    >
                      <a className="menu-link px-3 georgian padding0">
                        <i className="bi bi-pencil-fill" />
                        &nbsp;გადაკეთება
                      </a>
                    </div>
                    <div
                      onClick={(e) => deleteProductHandler(product?.id)}
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
          })} */}
          {/* {filteredProducts?.length > 0 &&
            filteredProducts.map((product) => {
              product = product.attributes
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
                          href="https://www.domino.com.ge/products/electrical-goods/cables-and-wires/cable-wire/%E1%83%99%E1%83%90%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-sakcable-%E1%83%9E%E1%83%A3%E1%83%9C%E1%83%9E-3x2.5-h03vvh2-u-h05vvh2-u/"
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
                        onClick={() => { editHandler(product); setEditPopup(true); }}
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
          } */}
          {defaultP ? (
            defaultP.map((product) => (
              // Render your components for each default product
              <tbody key={product.id}>
                {/* Your product rendering logic */}
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                <td>
                  daelodet
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
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