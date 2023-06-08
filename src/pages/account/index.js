import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const index = () => {
    const [authUser, setAuthUser] = useState(null);
    const [authUsername, setAuthUsername] = useState(authUser?.username);
    const [authEmail, setAuthEmail] = useState(authUser?.email);
    const [authData, setAuthData] = useState({
        username: authUsername,
        email: authEmail
    });
    const authUserId = useSelector((state) => state.auth.user_id);

    useEffect(() => {
        const loggedUserInfo = async () => {
            await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[id]=${authUserId}`)
                .then((res) => {
                    const data = res.data;
                    console.log(data)
                    setAuthUser(data);
                });
        };
        loggedUserInfo()
    }, [authUserId]);
    console.log(authUser)

    return (
        <>
            <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">

                <div className="h-screen flex-grow-1 overflow-y-lg-auto">

                    <main className="py-6 bg-surface-secondary">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-7 mx-auto">
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
                                        <h5 className="mb-0">Account information</h5>
                                    </div>
                                    <form className="mb-6">
                                        <div className="row mb-5">
                                            <div className="col-md-6">
                                                <div className="">
                                                    <label className="form-label" htmlFor="first_name">First name</label>
                                                    <input type="text" className="form-control" id="first_name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="">
                                                    <label className="form-label" htmlFor="last_name">Last name</label>
                                                    <input type="text" className="form-control" id="last_name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-5">
                                            <div className="col-md-6">
                                                <div className="">
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                    <input type="email" className="form-control" id="email" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="">
                                                    <label className="form-label" htmlFor="phone_number">Phone number</label>
                                                    <input type="tel" className="form-control" id="phone_number" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="">
                                                    <label className="form-label" htmlFor="address">Address</label>
                                                    <input type="text" className="form-control" id="address" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="">
                                                    <label className="form-label" htmlFor="city">City</label>
                                                    <input type="text" className="form-control" id="city" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="">
                                                    <label className="form-label" htmlFor="country">Country</label>
                                                    <select className="form-select" id="country" placeholder="Your email" aria-label="Default select example">
                                                        <option>Country</option>
                                                        <option defaultValue="1">One</option>
                                                        <option defaultValue="2">Two</option>
                                                        <option defaultValue="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="">
                                                    <label className="form-label" htmlFor="zip">ZIP</label>
                                                    <input type="tel" className="form-control" id="zip" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="check_primary_address" id="check_primary_address" />
                                                    <label className="form-check-label" htmlFor="check_primary_address">
                                                        Make this my default address
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <button type="button" className="btn btn-sm btn-neutral me-2">Cancel</button>
                                            <button type="submit" className="btn btn-sm btn-primary">Save</button>
                                        </div>
                                    </form>
                                    <hr className="my-10" />
                                    <div className="row g-6">
                                        <div className="col-md-6">
                                            <div className="card shadow border-0">
                                                <div className="card-body">
                                                    <h5 className="mb-2">Public profile</h5>
                                                    <p className="text-sm text-muted mb-6">
                                                        Making your profile public means that anyone on the network will be able to find you.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card shadow border-0">
                                                <div className="card-body">
                                                    <h5 className="mb-2">Show my email</h5>
                                                    <p className="text-sm text-muted mb-6">
                                                        Showing your e-mail adresses means that anyone on the network will be able to find you.
                                                    </p>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default index;
