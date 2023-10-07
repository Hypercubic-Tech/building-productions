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
import ProductSelect from "./ProductSelect";
import CraftSelect from "./CraftSelect";

import styles from "./Products.module.css";
import DeleteBtn from "../svg/DeleteBtn";
import DeletSmall from "../svg/DeletSmall";
import SettingsSvg from "../svg/SettingsSvg";
import ThreeDotsSvg from "../svg/ThreeDotsSvg";

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
  total,
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
          notify(false, "პროდუქტი წაიშალა");
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
                <tr key={index} style={{ border: "1px solid black" }}>
                  <td style={{ paddingLeft: "8px" }}>{product?.categories}</td>
                  <td>
                    {product?.unites.map((i, index) => {
                      return <span key={index}>{i}</span>;
                    })}
                  </td>
                  <td>
                    {categorySums?.find(
                      (item) => item.title === product?.categories
                    )?.sum || 0}{" "}
                  </td>
                  <td>{product?.status ? "შეძენილია" : "არ არის შეძენილი"}</td>
                  <td>
                    {" "}
                    {categorySums?.find(
                      (item) => item.title === product?.categories
                    )?.sum || 0}{" "}
                  </td>
                  <td>
                    {categorySums?.find(
                      (item) => item.title === product?.categories
                    )?.sum || 0}{" "}
                  </td>
                  <td>ლარი</td>
                </tr>
              ))}
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
                <th className="georgian">დასახელება</th>
                <th className="georgian">მომწოდებელი</th>
                <th className="georgian">რაოდენობა</th>
                <th className="georgian">ერთეული</th>
                <th className="georgian">ღირებულება</th>
                <th className="georgian">ჯამი</th>
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
                    const defaultStatusValue =
                      product?.attributes?.product_status?.data?.attributes
                        ?.title;
                    const defaultCraftStatusValue =
                      product?.attributes?.craft_status?.data?.attributes
                        ?.title;
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
                            {(
                              product?.attributes?.price *
                              product?.attributes?.quantity
                            ).toFixed(2)}
                          </td>
                          <td className="georgian">
                            {product?.attributes?.type === "product"
                              ? "პროდუქტი"
                              : "სერვისი"}
                          </td>
                          <td className="georgian">
                            <div className="form-group">
                              {product?.attributes?.type === "product" ? (
                                <ProductSelect
                                  key={product.id}
                                  product={product}
                                  productStatusValues={productStatusValues}
                                  setProductStatusValues={
                                    setProductStatusValues
                                  }
                                  productStatus={productStatus}
                                  confirmEdit={confirmEdit}
                                  defaultStatusValue={defaultStatusValue}
                                />
                              ) : (
                                <CraftSelect
                                  key={product.id}
                                  product={product}
                                  craftStatusValues={craftStatusValues}
                                  setCraftStatusValues={setCraftStatusValues}
                                  craftStatus={craftStatus}
                                  confirmServiceEdit={confirmServiceEdit}
                                  defaultCraftStatusValue={
                                    defaultCraftStatusValue
                                  }
                                />
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
                              <ThreeDotsSvg />
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
                                  <SettingsSvg
                                    className={`${"card-svg rotate-svg"} ${
                                      styles.m0
                                    }`}
                                  />
                                </div>
                                <div
                                  onClick={() => {
                                    confirmHandler(product?.id);
                                  }}
                                  className="btn red-ghost-btn fw-boldest"
                                >
                                  <DeleteBtn
                                    className={`${"card-svg"} ${styles.m0}`}
                                  />
                                </div>
                                <DeletSmall className={styles.closeBtn} />
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
          {!totalSum && "exportPopUp" && (
            <div
              className="summary"
              style={{
                fontSize: "16px",
                padding: "4px",
                textAlign: "end",
                position: "absolute",
                bottom: "0px",
                right: "20px",
              }}
            >
              ჯამი: {total} ლარი
            </div>
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
