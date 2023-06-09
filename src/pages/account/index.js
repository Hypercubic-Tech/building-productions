import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import notify from "../../utils/notify";
import EditAccount from "../../components/popup/EditAccount";

const index = () => {
    const [authUser, setAuthUser] = useState([]);
    const [imgSrc, setImgSrc] = useState(null);
    const [image, setImage] = useState(null);
    const [isImageUpload, setIsImageUpload] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const authUserId = useSelector((state) => state.auth.user_id);

    const loggedUserInfo = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[id]=${authUserId}&populate=*`)
            .then((res) => {
                const data = res.data;
                setAuthUser(data);
            });
    };

    useEffect(() => {
        loggedUserInfo()
    }, [authUserId]);

    const closeUserProfileEdit = () => {
        setIsEdit(false);
    };

    const editUserProfile = () => {
        setIsEdit(true);
    };

    const handleMediaUpload = async (img) => {
        if (!img) {
            return;
        }

        const formData = new FormData();
        formData.append("files", img);

        try {
            await axios.post(
                `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/upload`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
                .then((res) => {
                    const data = res.data;
                    setImage(data[0]);
                    setImgSrc(data[0].url)
                    setIsImageUpload(true);
                    notify(false, "არჩეული სურათი წარმატებით აიტვირთა");
                });

        } catch (err) {
            console.error(err);
            notify(true, "სურათის ატვირთვა უარყოფილია");
        }
    };

    useEffect(() => {
        if (isImageUpload) {
            const userImageUpload = async () => {
                await axios.put(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users/${authUser[0]?.id}`, {
                    avatar: image?.id,
                })
                    .then(() => {
                        loggedUserInfo();
                    });
            };
            userImageUpload()
        }
    }, [isImageUpload]);

    const handleImageRemove = async () => {
        if (authUser[0]?.avatar) {
            await axios
                .delete(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/upload/files/${authUser[0]?.avatar[0]?.id}`)
                .then(() => {
                    setImage(null);
                    setImgSrc(null);
                    setIsImageUpload(false);
                    loggedUserInfo();
                    notify(false, "სურათი წარმატებით წაიშალა");
                })
        } else {
            notify(true, "სურათი არ არის ატვირთული");
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">

                        <div className="card card-primary card-outline mt-3 mb-3">
                            {authUser && authUser?.map((user, index) => {
                                return (
                                    <div className="card-body box-profile" key={index}>
                                        <div className="text-center mb-3 image-input image-input-outline w-100">
                                            {authUser[0]?.avatar && authUser[0]?.avatar[0]?.url ? (
                                                <img
                                                    src={
                                                        imgSrc
                                                            ? `${process.env.NEXT_PUBLIC_BUILDING_URL}${imgSrc}`
                                                            : `${process.env.NEXT_PUBLIC_BUILDING_URL}${authUser[0]?.avatar[0]?.url}`
                                                    }
                                                    width={200}
                                                    height={200}
                                                    style={{ borderRadius: "8px" }}
                                                    alt="Picture of the product"
                                                />
                                            ) : (
                                                <div style={{ margin: "0 auto", borderRadius: "8px" }} className="image-input-wrapper w-200px h-200px w-100"></div>
                                            )}

                                            <label
                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="change"
                                                data-bs-toggle="tooltip"
                                                title="Change avatar"
                                                style={{
                                                    right: "85px",
                                                    top: "-10px"
                                                }}
                                            >
                                                <i className="bi bi-pencil-fill fs-7" />
                                                <input
                                                    onChange={(e) => {
                                                        handleMediaUpload(e.target.files[0]);
                                                    }}
                                                    type="file"
                                                    name="avatar"
                                                />
                                            </label>
                                            <span
                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="remove"
                                                data-bs-toggle="tooltip"
                                                title="Remove avatar"
                                                onClick={handleImageRemove}
                                                style={{
                                                    right: "85px",
                                                    bottom: "-10px"
                                                }}
                                            >
                                                <input
                                                    type="hidden" name="avatar_remove" />
                                                <i className="bi bi-x fs-2" />
                                            </span>
                                        </div>
                                        <h1 className="text-center">{user?.username}</h1>
                                        <h5 className="text-muted text-center">{user?.userType}</h5>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="col-md-9 mt-3 mb-3">
                        <div className="card">
                            <div className="card-body">
                                {authUser && authUser?.map((user, index) => {
                                    return (
                                        <div className="row" key={index}>
                                            <div className="d-flex pt-3 pb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">მომხმარებლის სახელი</h6>
                                                </div>
                                                <div className="col-sm-6">{user?.username}</div>
                                            </div>
                                            <hr />
                                            <div className="d-flex pt-3 pb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">მომხმარებლის ტიპი</h6>
                                                </div>
                                                <div className="col-sm-6">{user?.userType === "company" ? 'კომპანია' : 'პერსონალური'}</div>
                                            </div>
                                            <hr />
                                            <div className="d-flex pt-3 pb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">იმეილი</h6>
                                                </div>
                                                <div className="col-sm-6">{user?.email}</div>
                                            </div>
                                            <hr />
                                            <div className="d-flex pt-3 pb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">მობილურის ნომერი</h6>
                                                </div>
                                                <div className="col-sm-6">{user?.phoneNumber}</div>
                                            </div>
                                            <hr />
                                            <div className="d-flex pt-3 pb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">გადახდის გეგმა</h6>
                                                </div>
                                                <div className="col-sm-6">{user?.paymentPlan === "paid" ? 'ფასიანი' : 'უფასო'}</div>
                                            </div>
                                            <hr />
                                            {user?.paymentPlan === "paid" && user?.paymentMethod && (
                                                <div className="d-flex pt-3 pb-3">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">გადახდის მეთოდი</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        {user?.paymentMethod === "bog" ? 'საქართველოს ბანკი' : 'თბს ბანკი'}
                                                    </div>
                                                </div>
                                            )}
                                            {user?.paymentPlan === "paid" && user?.paymentMethod && <hr />}
                                            <div className="col-sm-3 d-flex justify-content-start">
                                                {!isEdit && <button className="btn btn-primary" onClick={editUserProfile}>
                                                    <i className="bi bi-pencil"></i>
                                                    რედაქტირება
                                                </button>}
                                            </div>
                                        </div>
                                    )
                                })}
                                {isEdit && (<EditAccount authUser={authUser} onClose={closeUserProfileEdit} loggedUserInfo={loggedUserInfo} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
