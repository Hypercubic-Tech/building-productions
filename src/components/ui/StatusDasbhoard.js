import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setAuthState } from "../../store/slices/authSlice";

import axios from "axios";

import styles from './StatusDashboard.module.css';

const StatusDashboard = () => {
    const authStory = useSelector(setAuthState);
    const isLoggedIn = authStory.payload.auth.loggedIn

    const userStatus = useSelector((state) => state.userStatus);
    const [active, setActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (userStatus.username) {
            setIsLoading(false)
        }
    }, [userStatus])
    return (
        <Fragment>
            {isLoggedIn ? (
                <Fragment>
                    {isLoading ? (
                        <div className={styles.outer}>
                            Loading
                        </div>
                    ) : (
                        <div className={`${styles.outer} ${!active ? styles.deactive : styles.active}`}>
                            <span onClick={() => setActive(!active)} className={styles.btn}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path
                                        stroke="#000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20 4v16M4 12h12M4 12l4-4m-4 4l4 4"
                                    ></path>
                                </svg>
                            </span>
                            <div className={styles.inner}>
                                <div className={styles.item}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <g stroke="#1C274C" strokeWidth="1.5">
                                            <circle cx="12" cy="6" r="4"></circle>
                                            <path
                                                strokeLinecap="round"
                                                d="M15 20.615c-.91.247-1.926.385-3 .385-3.866 0-7-1.79-7-4s3.134-4 7-4 7 1.79 7 4c0 .345-.077.68-.22 1"
                                            ></path>
                                        </g>
                                    </svg>
                                    <p>{userStatus.username}</p>
                                </div>
                                <div className={styles.item}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <g stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5">
                                            <path d="M6.88 18.15v-2.07M12 18.15v-4.14M17.12 18.15v-6.22M17.12 5.85l-.46.54a18.882 18.882 0 01-9.78 6.04"></path>
                                            <path strokeLinejoin="round" d="M14.19 5.85h2.93v2.92"></path>
                                            <path
                                                strokeLinejoin="round"
                                                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
                                            ></path>
                                        </g>
                                    </svg>
                                    <p>{userStatus.p_title}</p>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.tooltip}>
                                        <svg
                                            widths='30px'
                                            height='20px'
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#7c839c"
                                            version="1.1"
                                            viewBox="0 0 24 24"
                                            xmlSpace="preserve"
                                        >
                                            <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm0 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm-1.5-12h3v8h-3v-8zm0-5h3v3h-3V5z"></path>
                                        </svg>
                                        <div className={styles.tooltipText}>
                                            {/* {userStatus.trial_expires && (
                                                <div style={{ flexDirection: "column", height: '44px' }} className={styles.tooltipItem}>
                                                    <span>საცდელი ვერსიის ვადა -</span>
                                                    <p>{userStatus.trial_expires}</p>
                                                </div>
                                            )} */}
                                            <div className={styles.tooltipItem}>
                                                <span>დაშვებული რაოდენობა -</span>
                                                <p>{userStatus.allowed_projects}</p>
                                            </div>
                                            <div className={styles.tooltipItem}>
                                                <span>ექსპორტი (pdf, exec) -</span>
                                                {userStatus.allowed_export ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="187"
                                                        height="187"
                                                        fill="none"
                                                        stroke="#707070"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <g fill="#ababab">
                                                            <path
                                                                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                                                                opacity="0.5"
                                                            ></path>
                                                            <path d="M16.03 8.97a.75.75 0 010 1.06l-5 5a.75.75 0 01-1.06 0l-2-2a.75.75 0 111.06-1.06l1.47 1.47 2.235-2.236L14.97 8.97a.75.75 0 011.06 0z"></path>
                                                        </g>
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <g fill="#fff">
                                                            <path d="M8.004 9.418a1 1 0 111.414-1.414l2.588 2.588 2.585-2.585a1 1 0 111.414 1.414l-2.585 2.585 2.584 2.584a1 1 0 01-1.414 1.414l-2.584-2.584-2.585 2.585a1 1 0 01-1.414-1.414l2.585-2.585-2.588-2.588z"></path>
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM3.007 12a8.993 8.993 0 1017.986 0 8.993 8.993 0 00-17.986 0z"
                                                                clipRule="evenodd"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                )}
                                            </div>
                                            <div className={styles.tooltipItem}>
                                                <span>მედია -</span>
                                                {userStatus.allowed_media ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="187"
                                                        height="187"
                                                        fill="none"
                                                        stroke="#707070"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <g fill="#ababab">
                                                            <path
                                                                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                                                                opacity="0.5"
                                                            ></path>
                                                            <path d="M16.03 8.97a.75.75 0 010 1.06l-5 5a.75.75 0 01-1.06 0l-2-2a.75.75 0 111.06-1.06l1.47 1.47 2.235-2.236L14.97 8.97a.75.75 0 011.06 0z"></path>
                                                        </g>
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <g fill="#fff">
                                                            <path d="M8.004 9.418a1 1 0 111.414-1.414l2.588 2.588 2.585-2.585a1 1 0 111.414 1.414l-2.585 2.585 2.584 2.584a1 1 0 01-1.414 1.414l-2.584-2.584-2.585 2.585a1 1 0 01-1.414-1.414l2.585-2.585-2.588-2.588z"></path>
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM3.007 12a8.993 8.993 0 1017.986 0 8.993 8.993 0 00-17.986 0z"
                                                                clipRule="evenodd"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '12px', whiteSpace: 'nowrap', paddingTop: '2px' }}>
                                        პროექტების რაოდენობა -
                                        <span> {userStatus.all_projects}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </Fragment>
            ) : ""}

        </Fragment>
    );
};

export default StatusDashboard;