import { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

import styles from "./AddWork.module.css";

const AddProduct = ({
    setSelect,
    crafts,
    unit,
    category,
    suppliers,
    craftStatus,
}) => {
    const router = useRouter();
    const projectId = router.query.projectId;

    const [toggle, setToggle] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    const [craftImage, setCraftImage] = useState(null);

    const [productData, setProductData] = useState({
        image: "",
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

    const [craftData, setCraftData] = useState({
        image: "",
        title: "",
        type: "service",
        supplier: {
            connect: [{ id: "none" }],
        },
        quantity: 0,
        unit: {
            connect: [{ id: null }],
        },
        price: 0,
        categories: {
            connect: [{ id: null }],
        },
        craft_status: {
            connect: [{ id: null }]
        },
        project: {
            connect: [{ id: projectId }]
        }
    });

    const handleSubmit = async () => {
        try {
            await axios
                .post("http://localhost:1337/api/products", {
                    data: productData,
                })
                .then((res) => {
                    console.log(res);
                });
        } catch (err) {
            console.log(err);
        }
        setSelect(null);
    };

    const handleCraftSubmit = async () => {
        console.log(craftData)
        try {
            await axios
                .post("http://localhost:1337/api/products", {
                    data: craftData,
                })
                .then((res) => {
                    console.log(res);
                });
        } catch (err) {
            console.log(err);
        }
        setSelect(null);
    };

    console.log(category, 'car');

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
                            <div
                                onClick={() => setToggle(true)}
                                className={` ${toggle ? "primary-focus" : ""
                                    } text-hover-primary mx-5 cursor-pointer `}
                            >
                                პროდუქციის დამატება
                            </div>
                            <div
                                onClick={() => setToggle(false)}
                                className={`${!toggle ? "primary-focus" : ""
                                    } text-hover-primary mx-5 cursor-pointer `}
                            >
                                ხელობის დამატება
                            </div>
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
                    <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                        {toggle ? (
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
                                    <div style={{ width: "95%" }}
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
                                                            setProductData((prevSendData) => ({
                                                                ...prevSendData,
                                                                image: e.target.files,
                                                            }));
                                                        }}
                                                        type="file"
                                                        name="avatar"
                                                        accept=".png, .jpg, .jpeg"
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
                                            >
                                                {category &&
                                                    category.map((item) => {
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
                                        <div className="mt-8 col-md-4 fv-row fv-plugins-icon-container">
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <label className="required fs-5 fw-bold mb-2 georgian">
                                                    შეძენილია
                                                </label>
                                                <input
                                                    className="mx-2 form-check-input"
                                                    type="checkbox"
                                                    data-kt-check="true"
                                                    data-kt-check-target="#kt_table_users .form-check-input"
                                                    defaultValue={"not purchased"}
                                                    onChange={(e) => {
                                                        setProductData((formData) => ({
                                                            ...formData,
                                                            purchased: true,
                                                        }));
                                                    }}
                                                />
                                            </div>
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
                        ) : (
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
                                    <div className="row mb-5">
                                        {isTouched && (
                                            <div className={styles.imageBox}>
                                                <img
                                                    onChange={(e) => {
                                                        setCraftData((prevSendData) => ({
                                                            ...prevSendData,
                                                            image: e.target.files,
                                                        }));
                                                    }}
                                                    src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${craftImage}`}
                                                    alt="img"
                                                />
                                            </div>
                                        )}
                                        {crafts && (
                                            <div className="col-md-8 fv-row fv-plugins-icon-container">
                                                <label className="required fs-5 fw-bold mb-2 georgian">
                                                    კატეგორია
                                                </label>
                                                <select
                                                    onChange={(e) => {
                                                        const selectedCraft = crafts.find(
                                                            (craft) => craft.id === Number(e.target.value)
                                                        );
                                                        console.log(selectedCraft);
                                                        setCraftImage(
                                                            selectedCraft?.attributes?.image?.data?.attributes
                                                                ?.url
                                                        );
                                                        setIsTouched(true);
                                                        setCraftData((prevSendData) => ({
                                                            ...prevSendData,
                                                            categories: {
                                                                connect: [{ id: e.target.value }],
                                                            },
                                                        }));
                                                    }}
                                                    name="category"
                                                    className="form-select form-select-solid georgian"
                                                >
                                                    {category.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.id}>
                                                                {item?.attributes?.title}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                                <div className="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                        )}
                                        {isTouched && (
                                            <>
                                                <div className="col-md-4 fv-row fv-plugins-icon-container">
                                                    <label className="required fs-5 fw-bold mb-2 georgian">
                                                        დასახელება
                                                    </label>
                                                    <input
                                                        onChange={(e) => {
                                                            setCraftData((prevSendData) => ({
                                                                ...prevSendData,
                                                                title: e.target.value,
                                                            }));
                                                        }}
                                                        type="text"
                                                        className="form-control form-control-solid georgian"
                                                        placeholder="დასახელება"
                                                        name="price"
                                                    />
                                                    <div className="fv-plugins-message-container invalid-feedback"></div>
                                                </div>
                                                <div className="col-md-4 fv-row fv-plugins-icon-container">
                                                    <label className="required fs-5 fw-bold mb-2 georgian">
                                                        ერთეული
                                                    </label>
                                                    <select
                                                        onChange={(e) => {
                                                            setCraftData((prevSendData) => ({
                                                                ...prevSendData,
                                                                unit: {
                                                                    connect: [{ id: e.target.value }],
                                                                },
                                                            }));
                                                        }}
                                                        name="unit"
                                                        className="form-select form-select-solid georgian"
                                                        data-placeholder="საზომიერთ."
                                                    >
                                                        {unit &&
                                                            unit.map((unit, index) => {
                                                                <option
                                                                    value="none"
                                                                    selected
                                                                    disabled
                                                                    hidden
                                                                ></option>;
                                                                return (
                                                                    <option key={index} value={unit.id}>
                                                                        {unit.attributes.title}
                                                                    </option>
                                                                );
                                                            })}
                                                    </select>
                                                    <div className="fv-plugins-message-container invalid-feedback"></div>
                                                </div>
                                                <div className="col-md-4 fv-row fv-plugins-icon-container">
                                                    <label className="required fs-5 fw-bold mb-2 georgian">
                                                        რაოდენობა
                                                    </label>
                                                    <input
                                                        onChange={(e) => {
                                                            setCraftData((prevSendData) => ({
                                                                ...prevSendData,
                                                                quantity: e.target.value,
                                                            }));
                                                        }}
                                                        type="number"
                                                        className="form-control form-control-solid georgian"
                                                        placeholder="პრო: რაოდენობა"
                                                        name="quantity"
                                                    />
                                                    <div className="fv-plugins-message-container invalid-feedback"></div>
                                                </div>
                                                <div className="col-md-4 fv-row fv-plugins-icon-container">
                                                    <label className="required fs-5 fw-bold mb-2 georgian">
                                                        ღირეულება
                                                    </label>
                                                    <input
                                                        onChange={(e) => {
                                                            setCraftData((prevSendData) => ({
                                                                ...prevSendData,
                                                                price: e.target.value,
                                                            }));
                                                        }}
                                                        type="number"
                                                        className="form-control form-control-solid georgian"
                                                        placeholder="პროდ: ღირებულება"
                                                        name="price"
                                                    />
                                                    <div className="fv-plugins-message-container invalid-feedback"></div>
                                                </div>
                                                <div className="col-md-4 fv-row fv-plugins-icon-container">
                                                    <label className="required fs-5 fw-bold mb-2 georgian">
                                                        სტატუსი
                                                    </label>

                                                    <select
                                                        onChange={(e) => {
                                                            setCraftData((prevSendData) => ({
                                                                ...prevSendData,
                                                                craft_status: {
                                                                    connect: [{ id: e.target.value }],
                                                                },
                                                            }));
                                                        }}
                                                        name="status"
                                                        className="form-select form-select-solid georgian"
                                                        data-placeholder="სტატუსი"
                                                    >
                                                        {craftStatus &&
                                                            craftStatus.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.id}>
                                                                        {item.attributes.title}
                                                                    </option>
                                                                );
                                                            })}
                                                    </select>
                                                    <div className="fv-plugins-message-container invalid-feedback"></div>
                                                </div>
                                            </>
                                        )}
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
                                        onClick={handleCraftSubmit}
                                        type="submit"
                                        className="btn btn-primary"
                                        data-kt-users-modal-action="submit"
                                    >
                                        <span className="indicator-label">დაამატე</span>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;


// bakcup

