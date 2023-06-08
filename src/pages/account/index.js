import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const index = () => {
    const [authUser, setAuthUser] = useState([]);
    const authUserId = useSelector((state) => state.auth.user_id);

    useEffect(() => {
        const loggedUserInfo = async () => {
            await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[id]=${authUserId}`)
                .then((res) => {
                    const data = res.data;
                    setAuthUser(data);
                });
        };
        loggedUserInfo()
    }, [authUserId]);

    const editUserProfile = () => {
        console.log('edit')
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">

                        <div className="card card-primary card-outline mt-3 mb-3">
                            <div className="card-body box-profile">
                                <div className="text-center mb-3">
                                    <img style={{ borderRadius: "50%" }} className="img-fluid img-circle" src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="User profile picture" />
                                </div>
                                <h1 className="text-center">{authUser[0]?.username}</h1>
                                <h5 className="text-muted text-center">{authUser[0]?.userType}</h5>
                            </div>

                        </div>
                        {/* <div className="col-xl-7 mx-auto pt-5 pb-5">
                        <div className="card shadow border-0 mt-4 mb-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <span className="svg-icon svg-icon-2tx svg-icon-warning me-4">
                                                <div
                                                    className="image-input image-input-outline"
                                                    data-kt-image-input="true"
                                                >
                                                    <img
                                                        style={{ borderRadius: "5px" }}
                                                        alt="..."
                                                        src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                    />

                                                    <label
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="change"
                                                        data-bs-toggle="tooltip"
                                                        title="Change avatar"
                                                    >
                                                        <i className="bi bi-pencil-fill fs-7" />
                                                        <input
                                                            type="file"
                                                            name="avatar"
                                                            accept=".png, .jpg, .jpeg"
                                                        />
                                                    </label>
                                                    <span
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="remove"
                                                        data-bs-toggle="tooltip"
                                                        title="Remove avatar"
                                                    >
                                                        <input
                                                            type="hidden" name="avatar_remove" />
                                                        <i className="bi bi-x fs-2" />
                                                    </span>

                                                </div>
                                            </span>
                                            {authUser && authUser?.map((user, index) => {
                                                return (
                                                    <div className="ms-4" key={index}>
                                                        <span className="h4 d-block mb-0 pt-1">{user?.username}</span>
                                                        <a href="#" className="text-sm font-semibold text-muted pt-1">{user?.email}</a>
                                                        <span className="d-block mb-0 pt-1">{user?.phoneNumber}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <h5 className="mb-0">მომხმარებლის ინფორმაცია</h5>
                        </div>
                        <form className="mb-6">
                            <div className="row mb-5">
                                <div className="col-md-6">
                                    <div className="">
                                        <label className="form-label" htmlFor="first_name">მომხმარებლის სახელი</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first_name"
                                            defaultValue={authUser[0]?.username}
                                            onChange={(e) => {
                                                setUserData((prevSendData) => ({
                                                    ...prevSendData,
                                                    username: e.target.value
                                                }));
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="">
                                        <label className="form-label" htmlFor="email">იმეილი</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            defaultValue={authUser[0]?.email}
                                            onChange={(e) => {
                                                setUserData((prevSendData) => ({
                                                    ...prevSendData,
                                                    email: e.target.value
                                                }));
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row g-5">
                                <div className="col-md-6">
                                    <label className="mt-2">მომხმარებლის ტიპი:</label>
                                    <select
                                        className="form-select form-select-solid georgian"
                                        value={authUser[0]?.userType || ""}
                                        onChange={(e) => {
                                            setUserData((prevSendData) => ({
                                                ...prevSendData,
                                                userType: e.target.value
                                            }));
                                        }}
                                    >
                                        <option disabled value="">აირჩიეთ მომხმარებლის ტიპი</option>
                                        <option id="1" value="personal">პერსონალური</option>
                                        <option id="2" value="company">კომპანია</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <div className="">
                                        <label className="form-label" htmlFor="phone_number">მობილურის ნომერი</label>
                                        <input type="tel" className="form-control" id="phone_number" defaultValue={authUser[0]?.phoneNumber} />
                                    </div>
                                </div>
                            </div>
                            <div className="row g-5">
                                <div className="col-md-6">
                                    <div className="d-grid gap-2 mt-n1">
                                        <label className="mt-2">აირჩიეთ გადახდის გეგმა:</label>
                                        <select
                                            required
                                            className="form-select form-select-solid georgian"
                                            value={authUser[0]?.paymentPlan || ""}
                                            onChange={(e) => {
                                                setUserData((prevSendData) => ({
                                                    ...prevSendData,
                                                    paymentPlan: e.target.value
                                                }));
                                            }}
                                        >
                                            <option disabled value="">აირჩიეთ გადახდის გეგმა</option>
                                            <option id="1" value="free">უფასო</option>
                                            <option id="2" value="paid">ფასიანი</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="text-end pt-5">
                                            <button type="button" className="btn btn-sm btn-neutral me-2">Cancel</button>
                                            <button type="submit" className="btn btn-sm btn-primary">Save</button>
                                        </div> */}
                        {/* </form>
                        <div className="my-10" />
                        <div className="row g-6">
                            <div className="col-md-12">
                                <div className="card shadow border-0">
                                    <div className="card-body d-flex align-items-center">
                                        <div>
                                            <h5 className="text-danger mb-2">Deactivate account</h5>
                                            <p className="text-sm text-muted">
                                                Once you delete your account, there is no going back. Please be certain.
                                            </p>
                                        </div>
                                        <div className="ms-auto">
                                            <button type="button" className="btn btn-sm btn-danger">Deactivate</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
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
                                            {user?.paymentMethod && <div className="d-flex pt-3 pb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">გადახდის მეთოდი</h6>
                                                </div>
                                                <div className="col-sm-6">{user?.paymentMethod === "bog" ? 'საქართველოს ბანკი' : 'თბს ბანკი'}</div>
                                            </div>}
                                            <hr />
                                            <div className="col-sm-3 d-flex justify-content-start">
                                                <button className="btn btn-primary" onClick={editUserProfile}>
                                                    <i className="bi bi-pencil"></i>
                                                    რედაქტირება
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default index;
