import { Fragment, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { setUserStatus } from "../../store/slices/statusSlice";

import axios from "axios";

import styles from './StatusDashboard.module.css';


const StatusDashboard = () => {
    const dispatch = useDispatch();
    const userStatus = useSelector((state) => state.userStatus);
    const provider = useSelector((state) => state.auth.provider);
    const authUserId = useSelector((state) => state.auth.user_id);

    const [price, setPrice] = useState(null);
    const [projects, setProjects] = useState(null);
    const [products, setProducts] = useState(null);

    const [userStatusUpdate, setUserStatusUpdate] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const loggedUserInfo = async () => {
        setIsLoading(true);
        let url;

        if (provider === "google") {
            url = `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[email]=${session?.user.email}&populate=*`;
        } else {
            url = `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[id]=${authUserId}&populate=*`;
        }

        if (url) {
            try {
                const response = await axios.get(url);
                const data = response.data;

                // setUserStatusUpdate((prevUserStatusUpdate) => ({
                //     ...prevUserStatusUpdate,
                //     username: data[0]?.username,
                //     p_title: data[0]?.payment_plan?.name,
                //     payment_duration: data[0]?.payment_duration,
                //     allowed_export: data[0]?.payment_plan?.allowed_export,
                //     allowed_media: data[0]?.payment_plan?.allowed_media,
                // }));

                if (data[0]?.payment_duration === 'month') {
                    setProducts(data[0]?.payment_plan?.month_allowed_products);
                    setProjects(data[0]?.payment_plan?.month_allowed_projects);
                } else {
                    setProducts(data[0]?.payment_plan?.year_allowed_products);
                    setProjects(data[0]?.payment_plan?.year_allowed_projects);
                }

                setUserStatusUpdate({
                    username: data[0]?.username,
                    p_title: data[0]?.payment_plan?.name,
                    payment_duration: data[0]?.payment_duration,
                    allowed_export: data[0]?.payment_plan?.allowed_export,
                    allowed_media: data[0]?.payment_plan?.allowed_media,
                    allowed_projects: projects,
                    allowed_products: products,
                })

                dispatch(setUserStatus(userStatusUpdate));
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    console.log(userStatusUpdate, '?')

    
    useEffect(() => {
        
        loggedUserInfo();
        console.log(userStatus, 'userStatus')
    }, [authUserId]);

    return (
        <Fragment>
            {authUserId && (
                <Fragment>
                    {isLoading ? (
                        <div className={styles.outer}>
                            Loading
                        </div>
                    )
                        :
                        (
                            <div className={styles.outer}>
                                <p>{userStatus.username}</p>
                                <div>
                                    <p>{userStatus.p_title}</p>
                                    <ul>
                                        <li>allowed projects - <span>{userStatus.allowed_projects}</span></li>
                                        <li>allowed products - <span>{userStatus.allowed_products}</span></li>
                                        <li>allowed media - <span>{userStatus.allowed_media ? "yes" : "no"}</span></li>
                                        <li>allowed export - <span>{userStatus.allowed_export ? 'yes' : "no"}</span></li>
                                        <li>payment duration - <span>{userStatus.payment_duration}</span></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </Fragment>
            )}
        </Fragment>
    );
};

export default StatusDashboard;