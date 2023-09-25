import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import axios from "axios";

import styles from './StatusDashboard.module.css';


const StatusDashboard = () => {
    const provider = useSelector((state) => state.auth.provider);
    const authUserId = useSelector((state) => state.auth.user_id);

    const [userStatus, setUserStatus] = useState({});
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
            await axios
                .get(url)
                .then((res) => {
                    const data = res.data;
                    // console.log(data[0]?.payment_plan, 'data')
                    //   setAuthUser(data);
                    setUserStatus({
                        title: data[0]?.payment_plan?.name,
                        month_allowed_products: data[0]?.payment_plan?.month_allowed_products,
                        year_allowed_products: data[0]?.payment_plan?.year_allowed_products,
                        month_allowed_projects: data[0]?.payment_plan?.month_allowed_projects,
                        year_allowed_projects: data[0]?.payment_plan?.year_allowed_projects,
                        month_price: data[0]?.payment_plan?.month_price,
                        year_price: data[0]?.payment_plan?.month_price,

                        payment_duration: data[0]?.payment_duration,

                    })
                })
                .then(() => {
                    setIsLoading(false);
                });
        }
    };

    useEffect(() => {
        loggedUserInfo();
    }, [authUserId, provider]);
    // console.log(authUserId, provider)
    // console.log(userStatus)
    return (
        <Fragment>
            {authUserId && (
                <Fragment>
                    {isLoading ? (
                        <div className={styles.outer}>
                            Loading
                        </div>
                    ) : (
                        <div className={styles.outer}>where is my money leboswki?</div>

                    )
                    }
                </Fragment>
            )}
        </Fragment>
    );
};

export default StatusDashboard;