import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductState,
  setProductState,
} from "../../store/slices/productSlice";

import ExportPopup from "../popup/ExportPopup";
import notify from "../../utils/notify";

import styles from "./Products.module.css";

const Products = ({
  editHandler,
  setSelect,
  totalSum,
  searchType,
  productStatus,
  craftStatus,
  select,
  defaultImage,
  allowedProductsHandler,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { projectId } = router.query;
  const activeCategoryId = useSelector((state) => state?.cats?.category);
  const products = useSelector((state) => state.prod.products);

  const [productStatusValues, setProductStatusValues] = useState({});
  const [craftStatusValues, setCraftStatusValues] = useState({});
  const [activeItem, setActiveItem] = useState();
  const [totalSumProduct, setTotalSumProduct] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);

  const [newStatusValue, setNewStatusValue] = useState(null);
  const [newCraftStatusValue, setNewCraftStatusValue] = useState(null);

  let itemsPerPage = 5;

  let productsToMap = products;

  if (searchType) {
    const lowercaseSearchType = searchType.toLowerCase();
    const filteredProducts = products.filter(
      (product) =>
        product?.attributes?.title
          ?.toLowerCase()
          ?.includes(lowercaseSearchType) ||
        product?.attributes?.unit?.data?.attributes?.title
          ?.toLowerCase()
          .includes(lowercaseSearchType) ||
        product?.attributes?.supplier?.data?.attributes?.title
          ?.toLowerCase()
          .includes(lowercaseSearchType) ||
        product?.attributes?.quantity
          ?.toString()
          ?.toLowerCase()
          .includes(lowercaseSearchType) ||
        product?.attributes?.price
          ?.toString()
          ?.toLowerCase()
          .includes(lowercaseSearchType) ||
        product?.attributes?.type?.toLowerCase().includes(lowercaseSearchType)
    );

    if (filteredProducts?.length >= 0) {
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
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    await swalWithBootstrapButtons
      .fire({
        title: "დაადასტურეთ, რომ გსურთ პროდუქტის სტატუსის რედაქტირება",
        text: "დადასტურების შემთხვევაში, პროდუქტი რედაქტირდება ავტომატურად",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "რედაქტირება",
        cancelButtonText: "უარყოფა",
        reverseButtons: true,
      })
      .then(async (result) => {
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
              connect: [{ id: projectId }],
            },
            product_status: {
              connect: [{ id: selectedId }],
            },
          };

          await axios
            .put(
              `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products/${product.id}`,
              {
                data: productData,
              }
            )
            .then((res) => {
              dispatch(setProductState(res.data.data));
              setNewStatusValue(selectedId);
              notify(false, "პროდუქტი რედაქტირდა");
            })
            .catch((err) => {
              console.log(err);
            });

          axios.get(
            `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[id][$eq]=${product.id}`
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("ოპერაცია უარყოფილია");
        }
      });
  };

  const confirmHandler = (item) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "დაადასტურეთ, რომ ნადვილად გსურთ პროექტის წაშლა",
        text: "თანხმობის შემთხვევაში, პროექტი წაიშლება",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "წაშლა",
        cancelButtonText: "უარყოფა",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteProductHandler(item);
          allowedProductsHandler();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          notify(true, "უარყოფილია");
        }
      });
  };

  const confirmServiceEdit = async (selectedId, product) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    await swalWithBootstrapButtons
      .fire({
        title: "დაადასტურეთ, რომ გსურთ პროდუქტის სტატუსის რედაქტირება",
        text: "დადასტურების შემთხვევაში, პროდუქტი რედაქტირდება ავტომატურად",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "რედაქტირება",
        cancelButtonText: "უარყოფა",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          let productData = {
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
              connect: [{ id: projectId }],
            },
            craft_status: {
              connect: [{ id: selectedId }],
            },
            craft_img_url: product?.attributes?.craft_img_url,
          };

          await axios
            .put(
              `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products/${product.id}`,
              {
                data: productData,
              }
            )
            .then((res) => {
              dispatch(setProductState(res.data.data));
              setNewCraftStatusValue(selectedId);
              notify(false, "პროდუქტი რედაქტირდა");
            })
            .catch((err) => {
              console.log(err);
            });

          axios.get(
            `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[id][$eq]=${product.id}`
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          notify(true, "ოპერაცია უარყოფილია");
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
        getProjectById();
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
      const categoryTitle =
        product?.attributes?.categories?.data[0]?.attributes?.title;
      const quantity = parseInt(product?.attributes?.quantity);
      const price = parseFloat(product?.attributes?.price);

      if (categoryTitle) {
        const existingCategorySum = categorySums.find(
          (item) => item.title === categoryTitle
        );
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
      (sum, product) =>
        product?.attributes?.project?.data?.attributes?.vatPercent || 0,
      0
    );
  }

  let unforeseenExpenses = 0;
  if (totalSumProduct && totalSumProduct.length > 0) {
    unforeseenExpenses = totalSumProduct.reduce(
      (sum, product) =>
        product?.attributes?.project?.data?.attributes?.unforeseenExpenses || 0,
      0
    );
  }

  let service_percentage = 0;
  if (totalSumProduct && totalSumProduct.length > 0) {
    service_percentage = totalSumProduct.reduce(
      (sum, product) =>
        product?.attributes?.project?.data?.attributes?.service_percentage || 0,
      0
    );
  }

  const totalProductPrice = parseFloat(productsTotal);
  const vatTotalPrice =
    (parseFloat(totalProductPrice) * parseInt(vatTotal)) /
    (100 + parseFloat(vatTotal));
  const unforeseenExpensesPrice =
    (parseFloat(productsTotal) * parseFloat(unforeseenExpenses)) / 100;
  const servicePercentagePrice =
    (parseFloat(productsTotal) * parseFloat(service_percentage)) / 100;
  const totalSumPrice =
    parseFloat(totalProductPrice) +
    parseFloat(vatTotalPrice) +
    parseFloat(unforeseenExpensesPrice) +
    parseFloat(servicePercentagePrice);

  const aggregatedProducts = {};

  totalSumProduct?.forEach((product) => {
    const title = product?.attributes?.title;
    const unit = product?.attributes?.unit?.data?.attributes?.title; // i need to get all the units not only one value
    const categories =
      product?.attributes?.categories?.data[0]?.attributes?.title;
    const price = product?.attributes?.price;
    const key = `${categories}`;

    if (product.attributes.type === "service") {
      const quantity = product?.attributes?.quantity;

      if (aggregatedProducts[key]) {
        aggregatedProducts[key].titles.push(title);
        aggregatedProducts[key].quantity += quantity;
        aggregatedProducts[key].unites.push(unit);
      } else {
        aggregatedProducts[key] = {
          titles: [title],
          unites: [unit],
          quantity,
          price,
          categories,
        };
      }
    }
  });

  useEffect(() => {
    if (activeCategoryId === null && projectId && productsToMap) {
      const totalSumHandler = async () => {
        await axios
          .get(
            `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[project][id][$eq]=${projectId}`
          )
          .then((res) => {
            const data = res.data;
            setTotalSumProduct(data.data);
          });
      };

      totalSumHandler();
    }
  }, [projectId, productsToMap, activeCategoryId]);

  useEffect(() => {
    setPageIndex(1);
  }, [activeCategoryId]);

  return (
    <>
      <div className="table-responsive">
        <table
          className="table align-middle table-row-dashed fs-6 gy-5 borderBottom"
          id="tableId"
        >
          {totalSum ? (
            <thead>
              <tr
                style={{ backgroundColor: "yellow", border: "1px solid black" }}
              >
                <th style={{ paddingLeft: "8px" }}>სამუშაო</th>
                <th>ერთეული</th>
                <th>რაოდენობა</th>
                <th>სტატუსი</th>
                <th>ხარჯი</th>
                <th>ჯამი</th>
                <th>ვალუტა</th>
              </tr>
              {Object.values(aggregatedProducts).map((product, index) => (
                <tr key={index}>
                  <td>{product?.categories}</td>
                  <td className={styles.sumTableUnities}>
                    {product?.unites.map((i, index) => {
                      return <span key={index}>{i}</span>;
                    })}
                  </td>
                  <td>{product?.status ? "შეძენილია" : "არ არის შეძენილი"}</td>
                  <td>
                    {categorySums?.find(
                      (item) => item.title === product?.categories
                    )?.sum || 0}{" "}
                    ლარი
                  </td>
                </tr>
              ))}
              <tr style={{ border: "1px solid black" }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>სულ</td>
                <td>{`${
                  Object?.values(categorySums).reduce(
                    (total, category) => total + category.sum,
                    0
                  ) || 0
                } `}</td>
                <td>ლარი</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{`დღგ ${parseInt(vatTotal)}%`}</td>
                <td>{`${vatTotalPrice.toFixed(2) || 0}`}</td>
                <td>ლარი</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{`გაუთ.ხარჯი ${parseFloat(unforeseenExpenses)}%`}</td>
                <td>{`${unforeseenExpensesPrice.toFixed(2) || 0}`}</td>
                <td>ლარი</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{`სერვისი ${parseFloat(service_percentage)}%`}</td>
                <td>{`${servicePercentagePrice.toFixed(2) || 0}`}</td>
                <td>ლარი</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>სულ ჯამი</td>
                <td>{`${totalSumPrice?.toFixed(2) || 0}`}</td>
                <td>ლარი</td>
              </tr>
            </thead>
          ) : (
            <thead>
              <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                <th className="w-10px pe-2">
                  <div className="form-check form-check-sm form-check-custom form-check-solid me-3"></div>
                </th>
                {/* min-w-125px */}
                <th className="georgian">დასახელება</th>
                <th className="georgian">მომწოდებელი</th>
                <th className="georgian">რაოდენობა</th>
                <th className="georgian">ერთეული</th>
                <th className="georgian">ღირებულება</th>
                <th className="georgian">ტიპი</th>
                <th className="georgian">სტატუსი</th>
                {select === null && (
                  <th className="text-end min-w-100px georgian">ცვლილება</th>
                )}
              </tr>
            </thead>
          )}
          {totalSum ? (
            <tbody>
              <tr></tr>
            </tbody>
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
              {productsToMap &&
                productsToMap
                  .slice(startIndex, endIndex)
                  .map((product, index) => {
                    const oldCraftStatusValue =
                      product?.attributes?.craft_status?.data?.id;
                    // const itemSelectedValues = selectedValues[product.id] || oldCraftStatusValue
                    const oldStatusValue =
                      product?.attributes?.product_status?.data?.id;

                    return (
                      <tbody key={index}>
                        <tr>
                          <td
                            style={{ gap: "3px", alignItems: "center" }}
                            className="d-flex align-items-center"
                          >
                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3 m20">
                              <a>
                                <div className="symbol-label georgian">
                                  <img
                                    onError={(e) => {
                                      e.target.src =
                                        process.env.NEXT_PUBLIC_BUILDING_URL +
                                        defaultImage;
                                    }}
                                    src={
                                      product.attributes.type === "product"
                                        ? `${process.env.NEXT_PUBLIC_BUILDING_URL}${product?.attributes?.image?.data?.attributes?.url}`
                                        : `${process.env.NEXT_PUBLIC_BUILDING_URL}${product.attributes.craft_img_url}`
                                    }
                                    alt="product img"
                                    className="w-100"
                                  />
                                </div>
                              </a>
                            </div>
                            <span>{product?.attributes?.title}</span>
                          </td>
                          <td className="georgian">
                            {product.attributes.type === "product" ? (
                              <a
                                href={
                                  product?.attributes?.productLink.startsWith(
                                    "http"
                                  )
                                    ? product?.attributes?.productLink
                                    : `http://${product?.attributes?.productLink}`
                                }
                                target="_blank"
                              >
                                {
                                  product?.attributes?.supplier?.data
                                    ?.attributes?.title
                                }
                              </a>
                            ) : (
                              " - "
                            )}
                          </td>

                          <td className="georgian">
                            {product?.attributes?.quantity}
                          </td>
                          <td className="georgian">
                            {product?.attributes?.unit?.data?.attributes?.title}
                          </td>
                          <td className="georgian">
                            {product?.attributes?.price}
                          </td>
                          <td className="georgian">
                            {product?.attributes?.type === "product"
                              ? "პროდუქტი"
                              : "სერვისი"}
                          </td>
                          <td className="georgian">
                            <div className="form-group">
                              {product?.attributes?.type === "product" ? (
                                <select
                                  className="form-select"
                                  value={productStatusValues[product.id] || ""}
                                  onChange={(event) => {
                                    const newStatusValue = event.target.value;
                                    setProductStatusValues(
                                      (prevStatusValues) => ({
                                        ...prevStatusValues,
                                        [product.id]: newStatusValue,
                                      })
                                    );
                                    confirmEdit(newStatusValue, product);
                                  }}
                                >
                                  {productStatus &&
                                    productStatus.map((item) => (
                                      <option key={item.id} value={item?.id}>
                                        {item.attributes.title}
                                      </option>
                                    ))}
                                </select>
                              ) : (
                                <select
                                  className="form-select"
                                  value={craftStatusValues[product.id] || ""}
                                  onChange={(event) => {
                                    const newCraftStatusValue =
                                      event.target.value;
                                    setCraftStatusValues(
                                      (prevStatusValues) => ({
                                        ...prevStatusValues,
                                        [product.id]: newCraftStatusValue,
                                      })
                                    );
                                    confirmServiceEdit(
                                      newCraftStatusValue,
                                      product
                                    );
                                  }}
                                >
                                  {craftStatus &&
                                    craftStatus.map((item) => (
                                      <option key={item.id} value={item?.id}>
                                        {item.attributes.title}
                                      </option>
                                    ))}
                                </select>
                              )}
                            </div>
                          </td>
                          <td
                            onClick={() => changeModalHandler(product)}
                            className={`${"text-end"} ${styles.changeModal}`}
                          >
                            <div
                              className={`${"menu-item px-3 padding8"} ${
                                styles.modalSvg
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-three-dots"
                                viewBox="0 0 16 16"
                              >
                                {" "}
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />{" "}
                              </svg>
                            </div>
                            {activeItem === product.id ? (
                              <div className={styles.modal}>
                                <div
                                  onClick={() => {
                                    editHandler(product);
                                    setSelect(
                                      product?.attributes?.type === "product"
                                        ? "edit-product"
                                        : "edit-service"
                                    );
                                  }}
                                  className={`fill-btn rotate-svg-btn btn btn-primary fw-boldest`}
                                >
                                  <svg
                                    className={`${"card-svg rotate-svg"} ${
                                      styles.m0
                                    }`}
                                    width="19"
                                    height="18"
                                    viewBox="0 0 19 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M7.63449 18L7.27297 15.1077C6.95373 15.0115 6.60854 14.8603 6.23739 14.6538C5.86624 14.4474 5.55053 14.2263 5.29027 13.9904L2.62297 15.125L0.757568 11.875L3.06334 10.1365C3.03386 9.95576 3.0095 9.76954 2.99027 9.57788C2.97104 9.38621 2.96142 9.19999 2.96142 9.01923C2.96142 8.85128 2.97104 8.67467 2.99027 8.48942C3.0095 8.30417 3.03386 8.09553 3.06334 7.86348L0.757568 6.125L2.62297 2.91345L5.27104 4.02885C5.56976 3.78013 5.89283 3.55578 6.24027 3.35578C6.5877 3.15578 6.92553 3.00128 7.25374 2.8923L7.63449 0H11.3653L11.7268 2.91153C12.1102 3.04614 12.4489 3.20063 12.7432 3.375C13.0374 3.54935 13.3403 3.7673 13.6518 4.02885L16.3768 2.91345L18.2422 6.125L15.8595 7.92115C15.9147 8.12757 15.9454 8.31699 15.9518 8.48942C15.9582 8.66186 15.9614 8.83205 15.9614 9C15.9614 9.15513 15.955 9.31892 15.9422 9.49135C15.9294 9.66378 15.8999 9.87243 15.8537 10.1173L18.198 11.875L16.3326 15.125L13.6518 13.9712C13.3403 14.2327 13.0268 14.4571 12.7114 14.6442C12.3961 14.8314 12.0679 14.9795 11.7268 15.0885L11.3653 18H7.63449ZM9.47297 11.5C10.1704 11.5 10.7614 11.2577 11.246 10.7731C11.7307 10.2885 11.973 9.69743 11.973 9C11.973 8.30257 11.7307 7.71154 11.246 7.22693C10.7614 6.74231 10.1704 6.5 9.47297 6.5C8.77168 6.5 8.17969 6.74231 7.69699 7.22693C7.21431 7.71154 6.97297 8.30257 6.97297 9C6.97297 9.69743 7.21431 10.2885 7.69699 10.7731C8.17969 11.2577 8.77168 11.5 9.47297 11.5Z"
                                      fill="#FCFFE7"
                                    />
                                  </svg>
                                </div>
                                <div
                                  onClick={() => {
                                    confirmHandler(product?.id);
                                  }}
                                  className="btn red-ghost-btn fw-boldest"
                                >
                                  <svg
                                    className={`${"card-svg"} ${styles.m0}`}
                                    width="15"
                                    height="16"
                                    viewBox="0 0 15 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M3.11537 16C2.65512 16 2.27083 15.8458 1.9625 15.5375C1.65417 15.2291 1.5 14.8448 1.5 14.3846V1.99996H0.5V0.999963H4.5V0.230713H10.5V0.999963H14.5V1.99996H13.5V14.3846C13.5 14.8448 13.3458 15.2291 13.0375 15.5375C12.7292 15.8458 12.3449 16 11.8846 16H3.11537ZM5.30768 13H6.3077V3.99996H5.30768V13ZM8.6923 13H9.69232V3.99996H8.6923V13Z"
                                      fill="#EB455F"
                                    />
                                  </svg>
                                </div>
                                <svg
                                  className={styles.closeBtn}
                                  width="12"
                                  height="12"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.4 13.3077L9 9.7077L12.6 13.3077L13.3077 12.6L9.7077 9L13.3077 5.4L12.6 4.6923L9 8.2923L5.4 4.6923L4.6923 5.4L8.2923 9L4.6923 12.6L5.4 13.3077ZM9.00335 18C7.7588 18 6.58872 17.7638 5.4931 17.2915C4.39748 16.8192 3.44444 16.1782 2.63397 15.3685C1.82352 14.5588 1.18192 13.6066 0.70915 12.512C0.236383 11.4174 0 10.2479 0 9.00335C0 7.7588 0.236158 6.58872 0.708475 5.4931C1.18081 4.39748 1.82183 3.44444 2.63153 2.63398C3.44123 1.82353 4.39337 1.18192 5.48795 0.709151C6.58255 0.236384 7.75212 0 8.99665 0C10.2412 0 11.4113 0.236158 12.5069 0.708475C13.6025 1.18081 14.5556 1.82182 15.366 2.63152C16.1765 3.44122 16.8181 4.39337 17.2908 5.48795C17.7636 6.58255 18 7.75212 18 8.99665C18 10.2412 17.7638 11.4113 17.2915 12.5069C16.8192 13.6025 16.1782 14.5556 15.3685 15.366C14.5588 16.1765 13.6066 16.8181 12.512 17.2909C11.4174 17.7636 10.2479 18 9.00335 18Z"
                                    fill="#EB455F"
                                  />
                                </svg>
                                {/* <div
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
                            </div> */}
                              </div>
                            ) : (
                              ""
                            )}
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
            </>
          )}
        </table>
        {!productsToMap?.length && activeCategoryId && (
          <div style={{ margin: "100px", textAlign: "center" }}>
            პროდუქტი ვერ მოიძებნა!
          </div>
        )}
        {productsToMap.length > 5 && (
          <nav aria-label="Page navigation example">
            {activeCategoryId === null ? (
              ""
            ) : (
              <ul className="pagination">
                <li
                  className="page-item"
                  onClick={handleDecrementPageIndex}
                  value={pageIndex}
                >
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    className="page-item"
                    onClick={handleChangePageIndex}
                    key={index + 1}
                  >
                    <a className="page-link" id={index + 1} href="#">
                      {index + 1}
                    </a>
                  </li>
                ))}
                <li
                  className="page-item"
                  onClick={handleIncrementPageIndex}
                  value={pageIndex}
                >
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            )}
          </nav>
        )}
      </div>

      {select === "exportPopUp" && (
        <ExportPopup
          setSelect={setSelect}
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
        />
      )}
    </>
  );
};

export default Products;
