import styles from "../products/Products.module.css"

const TableExport = ({ totalSum, aggregatedProducts,
  projectId, productsToMap, startIndex, endIndex,
  activeItem, categorySums, vatTotal, vatTotalPrice,
  unforeseenExpenses, unforeseenExpensesPrice,
  service_percentage, servicePercentagePrice,
  totalSumPrice, select
}) => {
  console.log(aggregatedProducts)
  return (
    <div id="table2Id" style={{ paddingTop: "30px" }}>
      {select === "exportPopUp" && <div style={{ margin: "50px", marginTop: "30px" }} >
        <svg style={{ width: '50px', height: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 256 256">
          <g>
            <path
              d="M227.374 163.203l-94.82 65.645a8 8 0 01-9.108 0l-94.82-65.645a8 8 0 01-3.176-8.64L52.78 52.08a4 4 0 017.61-.374L83 112h90l22.61-60.295a4 4 0 017.611.374l27.33 102.484a8 8 0 01-3.177 8.64z"
              opacity="0.2"
            ></path>
            <path d="M238.28 152.502L210.95 50.017a12 12 0 00-22.83-1.121L167.456 104H88.544L67.88 48.897a12 12 0 00-22.831 1.12l-27.33 102.485a16.04 16.04 0 006.353 17.278l94.82 65.645a16.076 16.076 0 0018.215 0l94.82-65.645a16.04 16.04 0 006.353-17.278zM128 222.27l-94.82-65.645 24.108-90.406 18.221 48.59A8 8 0 0083 120h90a8 8 0 007.49-5.19l18.222-48.591 24.108 90.406z"></path>
          </g>
        </svg>
      </div>
      }
      <table
        className="table align-middle table-row-dashed fs-6 gy-5 borderBottom"
        style={{ marginLeft: "50px" }}
      >
        {totalSum ? (
          <thead>
            <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
              <th>სამუშაო</th>
              <th>ერთეული</th>
              <th>რაოდენობა</th>
              <th>სტატუსი</th>
              <th>ჯამი</th>
            </tr>
            {Object.values(aggregatedProducts).map((product, index) => (
              <tr key={index}>
                <td>{product?.categories}</td>
                <td className={styles.sumTableUnities}>{product?.unites.map((i, index) => {
                  return (
                    <span key={index}>{i}</span>
                  )
                })}</td>
                <td>{product?.status ? 'შეძენილია' : 'არ არის შეძენილი'}</td>
                <td>{categorySums?.find((item) => item.title === product?.categories)?.sum || 0} ლარი</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{`სულ: ${Object?.values(categorySums).reduce((total, category) => total + category.sum, 0) || 0} ლარი`}</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{`დღგ ${parseInt(vatTotal)}%: ${vatTotalPrice.toFixed(2) || 0} ლარი`}</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{`გაუთ.ხარჯი ${parseFloat(unforeseenExpenses)}%: ${unforeseenExpensesPrice.toFixed(2) || 0} ლარი`}</td>
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
              <td>{`სულ ჯამი: ${totalSumPrice?.toFixed(2) || 0} ლარი`}</td>
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
              {select === null && <th className="text-end min-w-100px georgian">ცვლილება</th>}
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
                      <a href={`${product?.attributes?.productLink}`} target="_blank">
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
                    {select === null && <td
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
                    </td>}
                  </tr>
                </tbody>
              )
            })}
          </>
        )}
      </table>
    </div>
  );
}

export default TableExport;