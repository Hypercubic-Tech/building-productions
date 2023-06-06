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
                    setAuthUser(data);
                });
        };
        loggedUserInfo()
    }, [authUserId]);
    console.log(authUsername)

    return (
        <>
            <div className="container-fluid m-5">
                <div className="row">
                    <div className="col-md-3 mt-5">
                        <div className="card card-primary card-outline mb-3">
                            {authUser && authUser?.map((user, index) => {
                                return (
                                    <div className="card-body box-profile" key={index}>
                                        <div className="text-center">
                                            <img className="img-fluid img-circle rounded-circle" src="/images/test-img.png" alt="User profile picture" />
                                        </div>
                                        <h3 className="profile-username text-center">{user?.username}</h3>
                                        <p className="text-muted text-center">{user?.email}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="card card-primary">
                            <div className="card-header bg-primary">
                                <h3 className="card-title">About Me</h3>
                            </div>
                            <div className="card-body">
                                <strong><i className="fas fa-book mr-1"></i> Education</strong>
                                <p className="text-muted">
                                    B.S. in Computer Science from the University of Tennessee at Knoxville
                                </p>
                                <strong><i className="fas fa-map-marker-alt mr-1"></i> Location</strong>
                                <p className="text-muted">Malibu, California</p>
                                <strong><i className="fas fa-pencil-alt mr-1"></i> Skills</strong>
                                <p className="text-muted">
                                    <span className="tag tag-danger">UI Design</span>
                                    <span className="tag tag-success">Coding</span>
                                    <span className="tag tag-info">Javascript</span>
                                    <span className="tag tag-warning">PHP</span>
                                    <span className="tag tag-primary">Node.js</span>
                                </p>
                                <strong><i className="far fa-file-alt mr-1"></i> Notes</strong>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9 mt-5">
                        <div className="card">
                            <div className="card-header p-2">
                                <ul className="nav nav-pills align-items-center">
                                    <li className="nav-item"><a className="nav-link active" href="#settings" data-toggle="tab">Settings</a></li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-pane active" id="settings">
                                    <form className="form-horizontal">
                                        <div className="form-group row m-2">
                                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-sm-10">
                                                <input
                                                    className="form-control"
                                                    placeholder="სახელი"
                                                    onChange={(e) => {
                                                        setAuthData((prevSendData) => ({
                                                            ...prevSendData,
                                                            username: e.target.value
                                                        }))
                                                    }}
                                                    defaultValue={authUsername}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row m-2">
                                            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input name="email" className="form-control" placeholder="იმეილი" />
                                            </div>
                                        </div>
                                        <div className="form-group row m-2">
                                            <div className="offset-sm-2 col-sm-10">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
