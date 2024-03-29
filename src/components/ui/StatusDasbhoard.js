import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { setAuthState } from "../../store/slices/authSlice";
import { setUserStatus } from "../../store/slices/statusSlice";

import axios from "axios";

import styles from './StatusDashboard.module.css';

const StatusDashboard = () => {
    const authStory = useSelector(setAuthState);
    const authUserId = useSelector((state) => state.auth.user_id);
    const isLoggedIn = authStory.payload.auth.loggedIn;

    const dispatch = useDispatch();

    const { data: session } = useSession();
    const provider = useSelector((state) => state.auth.provider);


    const userStatus = useSelector((state) => state.userStatus);
    const [active, setActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const trialExpiredChecker = async () => {
        const now = new Date();
        const expiredDate = new Date(userStatus?.trial_expires);
        if (expiredDate instanceof Date && isNaN(expiredDate) === false) {
            if (now > expiredDate) {
                try {
                    await axios
                        .put(
                            `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users/${userId}`,
                            {
                                trial_used: true,
                                trial_expires: 'expired'
                            }
                        )
                    dispatch(setUserStatus({ trial_expires: "expired", trial_used: true }));
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };

    const loggedUserInfo = async () => {
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
                    // setAuthUser(data);
                    // setUserData({
                    //     id: data[0]?.id,
                    //     username: data[0]?.username,
                    //     email: data[0]?.email,
                    //     phoneNumber: data[0]?.phoneNumber,
                    //     payment_duration: data[0]?.payment_duration,
                    //     payment_plan: {
                    //         connect: [{ id: data[0]?.payment_plan?.id.toString() }],
                    //     },
                    //     trial_expires: data[0]?.trial_expires,
                    //     trial_used: data[0]?.trial_used,
                    //     card_number: data[0]?.card_number,
                    //     card_cvc: data[0]?.card_cvc,
                    //     card_month: data[0]?.card_month,
                    //     card_year: data[0]?.card_year,
                    //     account_type: data[0]?.account_type
                    // });

                    // for user dashboard
                    dispatch(setUserStatus({
                        username: data[0]?.username,
                        p_title: data[0]?.payment_plan?.name,
                        payment_duration: data[0]?.payment_duration,
                        allowed_export: data[0]?.payment_plan?.allowed_export,
                        allowed_media: data[0]?.payment_plan?.allowed_media,
                        all_projects: data[0]?.projects.length,
                        account_type: data[0]?.account_type,
                        trial_used: data[0]?.trial_used,
                        trial_expires: data[0]?.trial_expires,

                    }));

                    if (data[0]?.payment_duration === "month") {
                        // setUserStatusUpdate({
                        //     allowed_projects: data[0]?.payment_plan?.month_allowed_projects,
                        // });
                        dispatch(setUserStatus({ allowed_projects: data[0]?.payment_plan?.month_allowed_projects }));
                    }
                    if (data[0]?.payment_duration === "year") {
                        dispatch(setUserStatus({ allowed_projects: data[0]?.payment_plan?.year_allowed_projects }));

                    }
                })
                .then(() => {
                    trialExpiredChecker();
                    setIsLoading(false);
                });
        }
    };

    useEffect(() => {
        if (userStatus.username) {
            setIsLoading(false)
        }
    }, [userStatus])

    useEffect(() => {
        if (isLoggedIn) {
            loggedUserInfo();
        }
    }, [isLoggedIn])
};

export default StatusDashboard;