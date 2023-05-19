import { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

import styles from "./AddProduct.module.css";

const EditService = ({
    setSelect,
    crafts,
    unit,
    allCategories,
    suppliers,
    craftStatus,
}) => {
    const router = useRouter();
    const projectId = router.query.projectId;

    const [toggle, setToggle] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    const [craftImage, setCraftImage] = useState(null);
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
    const [craftData, setCraftData] = useState({
        title: "",
        type: "service",
        quantity: 0,
        unit: {
            connect: [{ id: null }],
        },
        // image: {
        //     connect: [{ id: null }],
        // },
        price: 0,
        categories: {
            connect: [{}],
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
                .post(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products`, {
                    data: productData,
                })
        } catch (err) {
            console.log(err);
        }
        setSelect(null);
    };

    const handleCraftSubmit = async () => {
        try {
            await axios
                .post(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products`, {
                    data: craftData,
                })
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


    console.log(setSelect)

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
                            {/* <div
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
                            </div> */}
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
                                <div className="row mb-5">
                                    {isTouched && (
                                        <div className={styles.imageBox}>
                                            <img
                                                onChange={(e) => {
                                                    // setCraftData((prevSendData) => ({
                                                    //     ...prevSendData,
                                                    //     image: {
                                                    //         connect: [{ id: e.target.files }],
                                                    //     },
                                                    // }));
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
                                                name="allCategories"
                                                className="form-select form-select-solid georgian"
                                            >
                                                {allCategories.map((item, index) => {
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditService;


// bakcup

