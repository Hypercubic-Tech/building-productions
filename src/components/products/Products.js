import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { deleteProductState, setProductState } from "../../store/slices/productSlice";

import ExportPopup from "../popup/ExportPopup"
import notify from "../../utils/notify";
import styles from "./Products.module.css";

const Products = ({ editHandler, setSelect, totalSum, searchType, productStatus, craftStatus, select, defaultImage }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { projectId } = router.query;
  const activeCategoryId = useSelector(state => state?.cats?.category);

  const products = useSelector(state => state.prod.products);

  const [activeItem, setActiveItem] = useState();
  const [totalSumProduct, setTotalSumProduct] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);

  let itemsPerPage = 5;

  let productsToMap = products;

  if (searchType) {
    const lowercaseSearchType = searchType.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product?.attributes?.title?.toLowerCase().includes(lowercaseSearchType) ||
      product?.attributes?.unit?.data?.attributes?.title?.toLowerCase().includes(lowercaseSearchType) ||
      product?.attributes?.supplier?.data?.attributes?.title?.toLowerCase().includes(lowercaseSearchType) ||
      product?.attributes?.quantity?.toString()?.toLowerCase().includes(lowercaseSearchType) ||
      product?.attributes?.price?.toString()?.toLowerCase().includes(lowercaseSearchType) ||
      product?.attributes?.type?.toLowerCase().includes(lowercaseSearchType)
    );

    if (filteredProducts.length > 0) {
      productsToMap = filteredProducts;
    }
  }

  const totalPages = Math.ceil(productsToMap.length / itemsPerPage);
  const startIndex = (pageIndex - 1) * itemsPerPage;
  const endIndex = pageIndex * itemsPerPage;

  const handleDecrementPageIndex = () => {
    if (pageIndex > 1) {
      setPageIndex(pageIndex - 1);
    }
  };

  const handleChangePageIndex = (event) => {
    const newPageIndex = parseInt(event.target.id);
    setPageIndex(newPageIndex);
  };

  const handleIncrementPageIndex = () => {
    if (pageIndex < totalPages) {
      setPageIndex(pageIndex + 1);
    }
  };

  const confirmEdit = async (selectedId, product) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    await swalWithBootstrapButtons.fire({
      title: 'დაადასტურეთ, რომ გსურთ პროდუქტის სტატუსის რედაქტირება',
      text: 'დადასტურების შემთხვევაში, პროდუქტი რედაქტირდება ავტომატურად',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'რედაქტირება',
      cancelButtonText: 'უარყოფა',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        let productData = {
          image: product?.attributes?.image?.data?.id,
          title: product?.attributes?.title,
          type: "product",
          supplier: {
            connect: [{ id: product?.attributes?.supplier?.data?.id }],
          },
          productLink: product?.attributes?.productLink,
          quantity: product?.attributes?.quantity,
          unit: {
            connect: [{ id: product?.attributes?.unit?.data?.id }],
          },
          price: product?.attributes?.price,
          categories: {
            connect: [{ id: activeCategoryId }],
          },
          project: {
            connect: [{ id: projectId }]
          },
          product_status: {
            connect: [{ id: selectedId }]
          },
        };

        await axios
          .put(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products/${product.id}`, {
            data: productData,
          })
          .then(res => {
            dispatch(setProductState(res.data.data));
            notify(false, "პროდუქტი რედაქტირდა");
          })
          .catch(err => {
            console.log(err);
          });

        axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[id][$eq]=${product.id}`)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire('ოპერაცია უარყოფილია')
          .then(() => {
            window.location.reload();
          });
      }
    });
  };

  const deleteProductHandler = async (productId) => {
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products/${productId}`
      )
      .then(() => {
        dispatch(deleteProductState(productId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeModalHandler = (product) => {
    if (activeItem === product.id) {
      setActiveItem(null);
    } else {
      setActiveItem(product.id);
    }
  };

  let productsTotal = 0;
  let categorySums = [];

  if (totalSumProduct && totalSumProduct.length > 0) {
    totalSumProduct.forEach((product) => {
      const categoryTitle = product?.attributes?.categories?.data[0]?.attributes?.title;
      const quantity = parseInt(product?.attributes?.quantity);
      const price = parseFloat(product?.attributes?.price);

      if (categoryTitle) {
        const existingCategorySum = categorySums.find((item) => item.title === categoryTitle);
        if (existingCategorySum) {
          existingCategorySum.sum += quantity * price;
        } else {
          categorySums.push({
            title: categoryTitle,
            sum: quantity * price,
          });
        }
        productsTotal += quantity * price;
      }
    });
  }

  let vatTotal = 0;
  if (totalSumProduct && totalSumProduct.length > 0) {
    vatTotal = totalSumProduct.reduce(
      (sum, product) => (product?.attributes?.project?.data?.attributes?.vatPercent || 0),
      0
    );
  }

  let unforeseenExpenses = 0;
  if (totalSumProduct && totalSumProduct.length > 0) {
    unforeseenExpenses = totalSumProduct.reduce(
      (sum, product) => (product?.attributes?.project?.data?.attributes?.unforeseenExpenses || 0),
      0
    );
  }

  let service_percentage = 0;
  if (totalSumProduct && totalSumProduct.length > 0) {
    service_percentage = totalSumProduct.reduce(
      (sum, product) => (product?.attributes?.project?.data?.attributes?.service_percentage || 0),
      0
    );
  }

  const totalProductPrice = parseFloat(productsTotal);
  const vatTotalPrice = (parseFloat(totalProductPrice) * parseInt(vatTotal)) / (100 + parseFloat(vatTotal));
  const unforeseenExpensesPrice = parseFloat(productsTotal) * parseFloat(unforeseenExpenses) / 100;
  const servicePercentagePrice = parseFloat(productsTotal) * parseFloat(service_percentage) / 100;
  const totalSumPrice = parseFloat(totalProductPrice) + parseFloat(vatTotalPrice) + parseFloat(unforeseenExpensesPrice) + parseFloat(servicePercentagePrice);


  const confirmHandler = (item) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'დაადასტურეთ, რომ ნადვილად გსურთ პროექტის წაშლა',
        text: 'თანხმობის შემთხვევაში, პროექტი წაიშლება',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'წაშლა',
        cancelButtonText: 'უარყოფა',
        reverseButtons: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteProductHandler(item);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('უარყოფილია', '');
        }
      });
  };

  const getActiveItem = (selectedId, product) => {
    confirmEdit(+selectedId, product);
  };

  const aggregatedProducts = {};

  totalSumProduct?.forEach((product) => {
    const title = product?.attributes?.title;
    const unit = product?.attributes?.unit?.data?.attributes?.title;
    const categories = product?.attributes?.categories?.data[0]?.attributes?.title;
    const quantity = product?.attributes?.quantity;
    const price = product?.attributes?.price;
    const key = `${categories}`;

    if (aggregatedProducts[key]) {
      aggregatedProducts[key].titles.push(title);
      aggregatedProducts[key].quantity += quantity;
    } else {
      aggregatedProducts[key] = {
        titles: [title],
        unit,
        quantity,
        price,
        categories
      };
    }
  });

  useEffect(() => {
    if (projectId) {
      const totalSumHandler = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[project][id][$eq]=${projectId}`)
          .then((res) => {
            const data = res.data;
            setTotalSumProduct(data.data);
          })
      };

      totalSumHandler();
    };
  }, [projectId]);

  return (
    <>
      <div className="table-responsive">
        <table
          className="table align-middle table-row-dashed fs-6 gy-5 borderBottom"
          id="tableId"
        >
          {totalSum ? (
            <thead>
              <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                <th>სამუშაო</th>
                <th>ერთეული</th>
                <th>რაოდენობა</th>
                <th>ჯამი</th>
              </tr>
              {Object.values(aggregatedProducts).map((product, index) => (
                <tr key={index}>
                  <td>{product?.categories}</td>
                  <td>{product?.unit}</td>
                  <td>{product?.quantity}</td>
                  <td>{categorySums.find((item) => item.title === product?.categories)?.sum || 0} ლარი</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>{`სულ: ${Object.values(categorySums).reduce((total, category) => total + category.sum, 0) || 0} ლარი`}</td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>{`დღგ ${parseInt(vatTotal)}%: ${vatTotalPrice.toFixed(2) || 0} ლარი`}</td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>{`გაუთ.ხარჯი ${parseFloat(unforeseenExpenses)}%: ${unforeseenExpensesPrice.toFixed(2) || 0} ლარი`}</td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>{`მომსახურეობა ${parseFloat(service_percentage)}%: ${servicePercentagePrice.toFixed(2) || 0} ლარი`}</td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>{`სულ ჯამი: ${totalSumPrice.toFixed(2) || 0} ლარი`}</td>
              </tr>
            </thead>
          ) : (
            <thead>
              <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                <th className="w-10px pe-2">
                  <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                  </div>
                </th>
                <th className="georgian">დასახელება</th>
                <th className="georgian">მომწოდებელი</th>
                <th className="georgian">რაოდენობა</th>
                <th className="georgian">ერთეული</th>
                <th className="georgian">ღირებულება</th>
                <th className="georgian">ტიპი</th>
                <th className="georgian">სტატუსი</th>
                <th className="text-end min-w-100px georgian">ცვლილება</th>
              </tr>
            </thead>
          )}
          {totalSum ? (
            <tbody><tr></tr></tbody>
          ) : (
            <>
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
              {productsToMap && productsToMap.slice(startIndex, endIndex).map((product) => {
                return (
                  <tbody key={product?.id}>
                    <tr>
                      <td style={{ gap: '3px', alignItems: 'center' }} className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3 m20">
                          <a>
                            <div className="symbol-label georgian">
                              <img
                                onError={(e) => {
                                  e.target.src = process.env.NEXT_PUBLIC_BUILDING_URL + defaultImage;
                                }}
                                src={product.attributes.type === 'product' ? `${process.env.NEXT_PUBLIC_BUILDING_URL}${product?.attributes?.image?.data?.attributes?.url}` : `${process.env.NEXT_PUBLIC_BUILDING_URL}${product.attributes.craft_img_url}`}
                                alt="product img"
                                className="w-100"
                              />
                            </div>
                          </a>
                        </div>
                        <span>{product?.attributes?.title}</span>
                      </td>
                      <td className="georgian">
                        {product.attributes.type === 'product' ? (
                          <a href={`${product?.attributes?.productLink}`} target="_blank">
                            {product?.attributes?.supplier?.data?.attributes?.title}
                          </a>
                        ) : " - "}
                      </td>
                      <td className="georgian">
                        {product?.attributes?.quantity}
                      </td>
                      <td className="georgian">
                        {product?.attributes?.unit?.data?.attributes?.title}
                      </td>
                      <td className="georgian">{product?.attributes?.price}</td>
                      <td className="georgian">{product?.attributes?.type === "product" ? "პროდუქტი" : "სერვისი"}</td>
                      <td className="georgian">
                        <div className="form-group">
                          {product?.attributes?.type === "product" ? (
                            <select
                              className="form-select"
                              defaultValue={product?.attributes?.product_status?.data?.id}
                              onChange={(event) => {
                                getActiveItem(event.target.value, product);
                              }}
                            >
                              {productStatus && productStatus.map((item) => {
                                return (
                                  <option key={item.id} value={item?.id}>{item?.attributes?.title}</option>
                                );
                              })}
                            </select>
                          ) : (
                            <select
                              className="form-select"
                              defaultValue={product?.attributes?.craft_status?.data[0]?.id}
                              onChange={(e) => {
                                setUpdateCraftStatus((updateCraftStatus) => ({
                                  ...updateCraftStatus,
                                  craft_status: {
                                    connect: [{ id: e.target.value }],
                                  },
                                }));
                              }}
                            >
                              {craftStatus && craftStatus.map((item) => {
                                return (
                                  <option key={item.id} value={item.id}>{item.attributes.title}</option>
                                )
                              })}
                            </select>
                          )}
                        </div>
                      </td>
                      <td
                        onClick={() => changeModalHandler(product)}
                        className={`${'text-end'} ${styles.changeModal}`}>
                        <div
                          className="menu-item px-3 padding8"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16"> <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /> </svg>
                        </div>
                        {activeItem === product.id ? (
                          <div className={styles.modal}>
                            <div
                              onClick={() => { editHandler(product); setSelect(product?.attributes?.type === 'product' ? 'edit-product' : 'edit-service') }}
                              className="menu-item px-3"
                            >
                              <a className="menu-link px-3 georgian padding0">
                                <i className="bi bi-pencil-fill" />
                                &nbsp;გადაკეთება
                              </a>
                            </div>
                            <div
                              onClick={() => { confirmHandler(product?.id) }}
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
              })}
            </>
          )}
        </table>
        {productsToMap?.length === 0 && <div style={{ margin: '100px', textAlign: 'center' }}>პროდუქტი ვერ მოიძებნა!</div>}
        {productsToMap.length > 5 && <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item" onClick={handleDecrementPageIndex} value={pageIndex}>
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li className="page-item" onClick={handleChangePageIndex} key={index + 1}>
                <a className="page-link" id={index + 1} href="#">
                  {index + 1}
                </a>
              </li>
            ))}
            <li className="page-item" onClick={handleIncrementPageIndex} value={pageIndex}>
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>}
      </div>
      {select === "exportPopUp" &&
        <ExportPopup setSelect={setSelect}
          totalSum={totalSum}
          aggregatedProducts={aggregatedProducts}
          projectId={projectId}
          productsToMap={productsToMap}
          startIndex={startIndex}
          endIndex={endIndex}
          activeItem={activeItem}
          totalSumPrice={totalSumPrice}
          categorySums={categorySums}
          vatTotal={vatTotal}
          vatTotalPrice={vatTotalPrice}
          unforeseenExpenses={unforeseenExpenses}
          unforeseenExpensesPrice={unforeseenExpensesPrice}
          service_percentage={service_percentage}
          servicePercentagePrice={servicePercentagePrice}
          select={select}
        />}
    </>
  );
};

export default Products