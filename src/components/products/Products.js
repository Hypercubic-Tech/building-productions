import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import Swal from "sweetalert2";

import { selectProduct, deleteProductState } from "../../store/slices/productSlice";

import notify from "../../utils/notify";
import styles from "./Products.module.css";

const Products = ({ editHandler, setSelect, totalSum, searchType }) => {
  const [activeItem, setActiveItem] = useState();
  const [totalSumProduct, setTotalSumProduct] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);
  const products = useSelector(state => state.prod.products);
  const router = useRouter();
  const { projectId } = router.query;
  const dispatch = useDispatch();
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
          swalWithBootstrapButtons.fire('ოპერაცია უარყოფილია');
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
  if (totalSumProduct && totalSumProduct.length > 0) {
    productsTotal = totalSumProduct.reduce(
      (sum, product) =>
        sum + parseInt(product?.attributes?.quantity) * parseFloat(product?.attributes?.price),
      0
    );
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
      (product) => (product?.attributes?.project?.data?.attributes?.unforeseenExpenses || 0),
      0
    );
  }

  let service_percentage = 0;
  if (totalSumProduct && totalSumProduct.length > 0) {
    service_percentage = totalSumProduct.reduce(
      (sum, product) => (product?.attributes?.project?.data?.attributes?.service_percentage || 0),
    );
  }

  const totalProductPrice = parseFloat(productsTotal)
  const vatTotalPrice = parseFloat(totalProductPrice) * parseFloat(vatTotal) / (100 + parseFloat(vatTotal));
  const unforseenExpensesPrice = parseFloat(productsTotal) * parseFloat(unforeseenExpenses) / 100 + parseFloat(unforeseenExpenses)
  const servicePercentagePrice = parseFloat(productsTotal) * parseFloat(service_percentage) / 100 + parseFloat(service_percentage)
  const totalSumPrice = parseFloat(totalProductPrice) + parseFloat(vatTotalPrice) + parseFloat(unforseenExpensesPrice) + parseFloat(servicePercentagePrice)

  useEffect(() => {
    if (projectId) {
      const totalSumHandler = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[project][id]=${projectId}`)
          .then((res) => {
            const data = res.data;
            setTotalSumProduct(data.data);
          })
      };

      totalSumHandler();
    };
  }, [projectId]);

  const aggregatedProducts = {};

  totalSumProduct?.forEach((product) => {
    if (product.attributes.type === 'service') {
      const title = product?.attributes?.title;
      const unit = product?.attributes?.unit?.data?.attributes?.title;
      const quantity = product?.attributes?.quantity;
      const price = product?.attributes?.price;
      const key = `${unit}`;

      if (aggregatedProducts[key]) {
        aggregatedProducts[key].titles.push(title);
        aggregatedProducts[key].quantity += quantity;
      } else {
        aggregatedProducts[key] = {
          titles: [title],
          unit,
          quantity,
          price,
        };
      }
    }
  });

  return (
    <>
      <div className="table-responsive">
        <table
          className="table align-middle table-row-dashed fs-6 gy-5 borderBottom"
          id="tableId"
        >
          {totalSum ? (
            <thead>
              {/* <div>
                <h3>განფასება</h3>
              </div> */}
              <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                <th>სამუშაო</th>
                <th>ერთეული</th>
                <th>რაოდენობა</th>
                <th>სტატუსი</th>
                <th>ჯამი</th>
              </tr>
              {Object.values(aggregatedProducts).map((product, index) => (
                <tr key={index}>
                  <td>{product?.titles.join(', ')}</td>
                  <td>{product?.unit}</td>
                  <td>{product?.quantity}</td>
                  <td>{product?.status ? 'შეძენილია' : 'არ არის შეძენილი'}</td>
                  <td>{productsTotal} ლარი</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{`სულ: ${productsTotal.toFixed(2) || 0} ლარი`}</td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{`დღგ ${parseFloat(vatTotal)}%: ${vatTotalPrice.toFixed(2) || 0} ლარი`}</td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{`გაუთ.ხარჯი ${parseFloat(unforeseenExpenses)}%: ${unforseenExpensesPrice.toFixed(2) || 0} ლარი`}</td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{`მომსახურეობა ${parseFloat(service_percentage)}%: ${servicePercentagePrice.toFixed(2) || 0} ლარი`}</td>
              </tr>

              <tr>
                <td></td>
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
                {/* min-w-125px */}
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
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          {/* <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue={1}
                          /> */}
                        </div>
                      </td>
                      <td style={{ gap: '3px', alignItems: 'center' }} className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3 m20">
                          <a>
                            <div className="symbol-label georgian">
                              <img
                                onError={(e) => {
                                  e.target.src = "/images/test-img.png";
                                }}
                                src={product.attributes.type === 'product' ? `${process.env.NEXT_PUBLIC_BUILDING_URL}` +
                                  product?.attributes?.image?.data?.attributes?.url : `${process.env.NEXT_PUBLIC_BUILDING_URL}` +
                                  product?.attributes?.craft_images?.data?.attributes?.image?.data?.attributes?.url}
                                alt=""
                                className="w-100"
                              />
                            </div>
                          </a>

                        </div>
                        <span>{product?.attributes?.title}</span>
                      </td>
                      <td className="georgian">
                        <a href={`https://www.${product?.attributes?.productLink}`} target="_blank">
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
                      <td className="georgian">{product?.attributes?.type === "product" ? "პროდუქტი" : "სერვისი"}</td>
                      <td className="georgian">{product?.attributes?.type === "product" ? product?.attributes?.status ? "შეძენილია" : "არაა შეძენილი" : "პროცესშია"}</td>
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
        {/* {filteredProducts?.length === 0 && <div style={{ width: '100vw', textAlign: 'center' }}>პროდუქტი ვერ მოიძებნა!</div>} */}
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
    </>
  );
};

export default Products;