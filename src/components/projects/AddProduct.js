import { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';

import styles from "./AddWork.module.css";

const AddProduct = ({
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
    const [imgSrc, setImgSrc] = useState(null);
    // const [productImage, setProductImage] = useState(null);
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
        formData.append("image", imgSrc);
    
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
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
                    <div style={{ width: "90%" }} className="modal-body scroll-y mx-5 mx-xl-15 my-7">
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
                                                    style={{marginTop: "90px"}}
                                                    data-kt-image-input-action="change"
                                                    data-bs-toggle="tooltip"
                                                    title="Change avatar"
                                                >
                                                    <i className="bi bi-pencil-fill fs-7" />
                                                    <input
                                                        onChange={(e) => {
                                                            console.log(e.target.files[0])
                                                            const file = e.target.files[0];
                                                            const reader = new FileReader();

                                                            reader.onload = (event) => {
                                                                setImgSrc(event.target.result);
                                                            };

                                                            reader.readAsDataURL(file);
                                                            handleMediaUpload();
                                                            // handleMediaUpload()
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
                                                {
                                                    imgSrc ? <Image
                                                        src={imgSrc}
                                                        width={70}
                                                        height={70}
                                                        alt="Picture of the author"
                                                    />
                                                     :
                                                    <svg id="camera_2_" data-name="camera (2)" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 151.175 118.986">
                                                        <g id="Group_1530" data-name="Group 1530" transform="translate(0 0)">
                                                            <g id="Group_1529" data-name="Group 1529" transform="translate(0 0)">
                                                            <path id="Path_1200" data-name="Path 1200" d="M146.145,63.338a16.253,16.253,0,0,0-11.927-5.03H110.364v-.287a12.9,12.9,0,0,0-3.88-9.341,13.148,13.148,0,0,0-9.341-3.88H54.032A13.248,13.248,0,0,0,40.668,58.021v.287H16.957A16.253,16.253,0,0,0,5.03,63.338,17.085,17.085,0,0,0,0,75.265v71.564a16.253,16.253,0,0,0,5.03,11.927,17.085,17.085,0,0,0,11.927,5.03H134.218a16.253,16.253,0,0,0,11.927-5.03,17.085,17.085,0,0,0,5.03-11.927V75.265A16.254,16.254,0,0,0,146.145,63.338ZM143.7,146.829h-.144a9.322,9.322,0,0,1-9.341,9.341H16.957a9.322,9.322,0,0,1-9.341-9.341V75.265a9.322,9.322,0,0,1,9.341-9.341H44.691a3.864,3.864,0,0,0,3.88-3.88V57.877a5.409,5.409,0,0,1,5.6-5.6H97.143a5.409,5.409,0,0,1,5.6,5.6v4.167a3.864,3.864,0,0,0,3.88,3.88h27.735a9.322,9.322,0,0,1,9.341,9.341Z" transform="translate(0 -44.8)"/>
                                                            <path id="Path_1201" data-name="Path 1201" d="M147.351,130.8a35.326,35.326,0,1,0,25,10.347A35.413,35.413,0,0,0,147.351,130.8Zm19.544,55.038a27.755,27.755,0,0,1-39.087,0,27.472,27.472,0,0,1-8.047-19.544,28.083,28.083,0,0,1,8.047-19.544,27.472,27.472,0,0,1,19.544-8.047,28.083,28.083,0,0,1,19.544,8.047,27.472,27.472,0,0,1,8.047,19.544A26.889,26.889,0,0,1,166.894,185.838Z" transform="translate(-71.763 -99.904)"/>
                                                            <ellipse id="Ellipse_135" data-name="Ellipse 135" cx="7.041" cy="7.041" rx="7.041" ry="7.041" transform="translate(119.704 30.752)"/>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                }   
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
                                        {/* {crafts && (
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
                                        )} */}
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

