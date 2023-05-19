import { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
// 
import styles from "./AddProduct.module.css";

const EditProduct = ({
    setSelect,
    unit,
    allCategories,
    suppliers,
    product
}) => {
    const router = useRouter();
    const projectId = router.query.projectId;
    const [productImage, setProductImage] = useState(null);
    const [productData, setProductData] = useState({
        // image: {
        //     connect: [{ image: null}]
        // },
        title: "",
        type: "product",
        purchased: false,
        supplier: {
            connect: [{ id: null }],
        },
        productLink: "",
        quantity: 0,
        unit: {
            connect: [{ id: null }],
        },
        price: 0,
        categories: {
            connect: [{ id: null }],
        },
        project: {
            connect: [{ id: projectId }]
        }
    });

    console.log(product.id)
    const handleSubmit = async () => {
        if (!product || !product.id) {
            console.log("Invalid product data");
            return;
        }

        try {
            await axios.put(
                `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products/${product.id}`,
                {
                    data: productData,
                }
            );
        } catch (err) {
            console.log(err);
        }

        setSelect(null);
    };


    const handleMediaUpload = async () => {
        const formData = new FormData();
        formData.append("image", productImage);

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/upload`, { formData });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            style={{ display: "block", paddingLeft: "0px" }}
            className="modal fade show"
            id="kt_modal_export_users"
            role="dialig"
            tabIndex={-1}
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered mw-650px">
                <div className="modal-content">
                    <div className="modal-header" id="kt_modal_add_user_header">
                        <div
                            className={` d-flex justify-content-center align-items-center w-100 p-2 `}
                        >
                        </div>
                        <div
                            className="btn btn-icon btn-sm btn-active-icon-primary"
                            data-kt-users-modal-action="close"
                        >
                            <span
                                className="svg-icon svg-icon-1"
                                onClick={() => {
                                    setSelect(null);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <rect
                                        opacity="0.5"
                                        x={6}
                                        y="17.3137"
                                        width={16}
                                        height={2}
                                        rx={1}
                                        transform="rotate(-45 6 17.3137)"
                                        fill="black"
                                    />
                                    <rect
                                        x="7.41422"
                                        y={6}
                                        width={16}
                                        height={2}
                                        rx={1}
                                        transform="rotate(45 7.41422 6)"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div style={{ width: "90%" }} className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                        <form id="kt_modal_add_user_form" className="form">
                            <div
                                className="d-flex flex-column scroll-y me-n7 pe-7"
                                id="kt_modal_add_user_scroll"
                                data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}"
                                data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                                data-kt-scroll-offset="300px"
                            >
                                <div
                                    className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                                    <span className="svg-icon svg-icon-2tx svg-icon-warning me-4">
                                        <div
                                            className="image-input image-input-outline"
                                            data-kt-image-input="true"
                                        >
                                            <div
                                            />
                                            <label
                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="change"
                                                data-bs-toggle="tooltip"
                                                title="Change avatar"
                                            >
                                                <i className="bi bi-pencil-fill fs-7" />
                                                <input
                                                    onChange={(e) => {
                                                        // setProductImage((prevSendData) => ({
                                                        //     ...prevSendData,
                                                        //     image: e.target.files[0],
                                                        // }));
                                                        setProductImage(e.target.files[0])
                                                        handleMediaUpload()
                                                    }}
                                                    type="file"
                                                    name="image"
                                                />
                                                <input type="hidden" name="avatar_remove" />
                                            </label>
                                            <span
                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="cancel"
                                                data-bs-toggle="tooltip"
                                                title="Cancel avatar"
                                            >
                                                <i className="bi bi-x fs-2" />
                                            </span>
                                            <span
                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="remove"
                                                data-bs-toggle="tooltip"
                                                title="Remove avatar"
                                            >
                                                <i className="bi bi-x fs-2" />
                                            </span>
                                        </div>
                                    </span>
                                    <div className="d-flex flex-stack flex-grow-1">
                                        <div className="fw-bold">
                                            <h4 className="text-gray-900 fw-bolder georgian">
                                                სურათი
                                            </h4>
                                            <div className="fs-6 text-gray-700 georgian">
                                                აირჩიეთ მხოლოდ ერთი სურათი
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-5'>
                                    <span> ძველი ფოტო სურათი </span>
                                    <img src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${product?.image?.data?.attributes?.url}`} alt='product image' />
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-8 fv-row fv-plugins-icon-container">
                                        <label className="required fs-5 fw-bold mb-2 georgian">
                                            დასახელება
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setProductData((prevSendData) => ({
                                                    ...prevSendData,
                                                    title: e.target.value,
                                                }));
                                            }}
                                            type="text"
                                            className="form-control form-control-solid georgian"
                                            placeholder="პროდუქციის დასახელება"
                                            name="title"
                                            defaultValue={product?.attributes?.title}
                                        />
                                        <div className="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                    <div className="col-md-4 fv-row fv-plugins-icon-container">
                                        <label className="required fs-5 fw-bold mb-2 georgian">
                                            მომწოდებელი
                                        </label>
                                        <select
                                            onClick={(e) => {
                                                setProductData((prevSendData) => ({
                                                    ...prevSendData,
                                                    supplier: {
                                                        connect: [{ id: e.target.value }],
                                                    },
                                                }));
                                            }}
                                            name="saler"
                                            className="form-select form-select-solid georgian"
                                            data-placeholder="მომწოდებელი"
                                            defaultValue={product?.attributes?.supplier?.data?.attributes?.title}
                                        >
                                            {suppliers &&
                                                suppliers.map((sup) => {
                                                    <option
                                                        value="none"
                                                        selected
                                                        disabled
                                                        hidden
                                                    ></option>;
                                                    return (
                                                        <option key={sup?.id} value={sup?.id}>
                                                            {sup?.attributes?.title}
                                                        </option>
                                                    );
                                                })}
                                        </select>
                                        <div className="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                    <div className="col-md-12 fv-row fv-plugins-icon-container">
                                        <label className="required fs-5 fw-bold mb-2 georgian">
                                            ლინკი
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setProductData((prevSendData) => ({
                                                    ...prevSendData,
                                                    productLink: e.target.value,
                                                }));
                                            }}
                                            type="text"
                                            className="form-control form-control-solid georgian"
                                            placeholder="http://momwodebeli.ge"
                                            name="prodactElAddress"
                                            defaultValue={product?.attributes?.productLink}
                                        />
                                        <div className="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                    <div className="col-md-4 fv-row fv-plugins-icon-container">
                                        <label className="required fs-5 fw-bold mb-2 georgian">
                                            რაოდენობა
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setProductData((prevSendData) => ({
                                                    ...prevSendData,
                                                    quantity: e.target.value,
                                                }));
                                            }}
                                            type="number"
                                            className="form-control form-control-solid georgian"
                                            placeholder="პრო: რაოდენობა"
                                            name="quantity"
                                            defaultValue={product?.attributes?.quantity}
                                        />
                                        <div className="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                    <div className="col-md-4 fv-row fv-plugins-icon-container">
                                        <label className="required fs-5 fw-bold mb-2 georgian">
                                            ერთეული
                                        </label>
                                        <select
                                            onClick={(e) => {
                                                setProductData((prevSendData) => ({
                                                    ...prevSendData,
                                                    unit: {
                                                        connect: [{ id: e.target.value }],
                                                    },
                                                }));
                                            }}
                                            name="count"
                                            className="form-select form-select-solid georgian"
                                            data-placeholder="საზომიერთ."
                                            defaultValue={product.attributes.unit.data.attributes.title}
                                        >
                                            {unit &&
                                                unit.map((u) => {
                                                    <option
                                                        value="none"
                                                        selected
                                                        disabled
                                                        hidden
                                                    ></option>;
                                                    return (
                                                        <option key={u?.id} value={u?.id}>
                                                            {u?.attributes?.title}
                                                        </option>
                                                    );
                                                })}
                                        </select>
                                        <div className="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                    <div className="col-md-4 fv-row fv-plugins-icon-container">
                                        <label className="required fs-5 fw-bold mb-2 georgian">
                                            ღირეულება
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setProductData((prevSendData) => ({
                                                    ...prevSendData,
                                                    price: e.target.value,
                                                }));
                                            }}
                                            type="number"
                                            className="form-control form-control-solid georgian"
                                            placeholder="პროდ: ღირებულება"
                                            name="price"
                                            defaultValue={product.attributes.price}
                                        />
                                        <div className="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                    <div className="col-md-4 fv-row fv-plugins-icon-container">
                                        <label className="required fs-5 fw-bold mb-2 georgian">
                                            კატეგორია
                                        </label>
                                        <select
                                            onClick={(e) => {
                                                setProductData((prevSendData) => ({
                                                    ...prevSendData,
                                                    categories: {
                                                        connect: [{ id: e.target.value }],
                                                    },
                                                }));
                                            }}
                                            name="count"
                                            className="form-select form-select-solid georgian"
                                            data-placeholder="საზომიერთ."
                                            defaultValue={product?.attributes?.categories?.data?.attributes?.title}
                                        >
                                            {allCategories &&
                                                allCategories.map((item) => {
                                                    <option
                                                        value="none"
                                                        selected
                                                        disabled
                                                        hidden
                                                    ></option>;
                                                    return (
                                                        <option key={item?.id} value={item?.id}>
                                                            {item?.attributes?.title}
                                                        </option>
                                                    );
                                                })}
                                        </select>
                                        <div className="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center pt-15">
                                <button
                                    onClick={() => {
                                        setSelect(null);
                                    }}
                                    type="reset"
                                    className="btn btn-light me-3"
                                    data-kt-users-modal-action="cancel"
                                >
                                    გაუქმება
                                </button>
                                <div
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="btn btn-primary"
                                    data-kt-users-modal-action="submit"
                                >
                                    <span className="indicator-label">დაამატე</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;


// bakcup
