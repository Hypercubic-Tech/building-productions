import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import Swal from "sweetalert2";

import { selectProduct, deleteProductState } from "../../store/slices/productSlice";

import notify from "../../utils/notify";
import TableExport from "../popup/TableExport";
import ExportPopup from "../popup/ExportPopup";
import styles from "./Products.module.css";

const Products = ({ editHandler, setSelect, totalSum, searchType, select }) => {
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

  return (
    <>
      <div className="table-responsive">
        <TableExport 
          totalSum={totalSum} 
          select={select} 
          aggregatedProducts={aggregatedProducts} 
          projectId={projectId}
          productsToMap={productsToMap} 
          startIndex={startIndex}
          endIndex={endIndex}
          activeItem={activeItem}
          categorySums={categorySums}
          vatTotal={vatTotal}
          vatTotalPrice={vatTotalPrice}
          unforeseenExpenses={unforeseenExpenses}
          unforeseenExpensesPrice={unforeseenExpensesPrice}
          service_percentage={service_percentage}
          servicePercentagePrice={servicePercentagePrice}
          totalSumPrice={totalSumPrice}
        />
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

export default Products;