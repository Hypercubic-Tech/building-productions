import axios from "axios";

const Products = ({ editHandler, allProduct }) => {

  const deleteProductHandler = async (productId) => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products/${productId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <table
        className="table align-middle table-row-dashed fs-6 gy-5"
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
            <th className="min-w-125px georgian">სამუშაო</th>
            <th className="min-w-125px georgian">ერთეული</th>
            <th className="min-w-125px georgian">რაოდენობა</th>
            <th className="min-w-125px georgian">ღირებულება</th>
            <th className="min-w-125px georgian">ჯამი</th>
            <th className="text-end min-w-100px georgian">ცვლილება</th>
          </tr>
        </thead>
        {allProduct &&
          allProduct?.map((product, index) => {
            return (
              <tbody className="text-gray-600 fw-bold" key={index}>
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
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                      <a href={product.link}>
                        <div className="symbol-label georgian">
                          <img src={`${process.env.NEXT_PUBLIC_BUILDING_URL}`+product?.attributes?.image?.data?.attributes?.url} alt="" className="w-100" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column georgian">
                      <a
                        href="https://www.domino.com.ge/products/electrical-goods/cables-and-wires/cable-wire/%E1%83%99%E1%83%90%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-sakcable-%E1%83%9E%E1%83%A3%E1%83%9C%E1%83%9E-3x2.5-h03vvh2-u-h05vvh2-u/"
                        className="text-gray-800 text-hover-primary mb-1 georgian"
                      >
                        {product.title ? product.title : product.category}
                      </a>
                      <span>{product.supplier}</span>
                    </div>
                  </td>
                  <td className="georgian">{product?.attributes?.unit?.data?.attributes?.title}</td>
                  <td className="georgian">{product?.attributes?.quantity}</td>
                  <td className="georgian">{product?.attributes?.price}</td>
                  <td className="georgian">
                    {parseInt(product.quantity) * parseFloat(product.price)}
                  </td>
                  <td className="text-end">
                    <div
                      onClick={() => editHandler(product)}
                      className="menu-item px-3"
                    >
                      <a className="menu-link px-3 georgian">
                        <i className="bi bi-pencil-fill" />
                        &nbsp;გადაკეთება
                      </a>
                    </div>
                    <div
                      onClick={(e) => deleteProductHandler(product.id)}
                      className="menu-item px-3"
                    >
                      <a
                        className="menu-link px-3 georgian"
                        data-kt-users-table-filter="delete_row"
                      >
                        <i className="bi bi-eraser-fill" />
                        &nbsp;წაშლა
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </>
  );
};

export default Products;
