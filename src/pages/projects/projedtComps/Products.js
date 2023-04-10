const Products = ({ProductData}) => {
    return ( 
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
                    <th className="min-w-125px georgian">
                    სამუშაო
                    </th>
                    <th className="min-w-125px georgian">
                    ერთეული
                    </th>
                    <th className="min-w-125px georgian">
                    რაოდენობა
                    </th>
                    <th className="min-w-125px georgian">
                    ღირებულება
                    </th>
                    <th className="min-w-125px georgian">ჯამი</th>
                    <th className="text-end min-w-100px georgian">
                    ცვლილება
                    </th>
                </tr>
            </thead>
            {ProductData.map((product, index) => {
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
                                <a href="https://www.domino.com.ge/products/electrical-goods/cables-and-wires/cable-wire/%E1%83%99%E1%83%90%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-sakcable-%E1%83%9E%E1%83%A3%E1%83%9C%E1%83%9E-3x2.5-h03vvh2-u-h05vvh2-u/">
                                <div className="symbol-label georgian">
                                    <img
                                    src={product.img}
                                    alt="ელექტრო სადენი მრავალწვერიანი 3X2.5"
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
                                {product.title}
                                </a>
                                <span>{product.seler}</span>
                            </div>
                            </td>
                            <td className="georgian">{product.count}</td>
                            <td className="georgian">
                            </td>
                            <td className="georgian">{product.price}</td>
                            <td className="georgian">
                            <b>{product.address}</b>
                            </td>
                            <td className="text-end">
                            <div className="menu-item px-3">
                                <a
                                    href="../../demo11/dist/apps/user-management/users/view.html"
                                    className="menu-link px-3 georgian"
                                >
                                    <i className="bi bi-pencil-fill" />
                                    &nbsp;გადაკეთება
                                </a>
                                </div>
                                <div className="menu-item px-3">
                                <a
                                    href="#"
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
     );
}
 
export default Products;