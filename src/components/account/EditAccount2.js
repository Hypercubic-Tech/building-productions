import { useEffect, useState } from 'react';

import axios from 'axios';

import { useDispatch } from "react-redux";

import { setAuthEmail } from "../../store/slices/authSlice";

import PriceCard from "../ui/PriceCard";
import PaymentMethod from "../popup/PaymentMethod";

import notify from '../../utils/notify';
import styles from "./EditAccount.module.css";


const EditAccount2 = ({
    authUserId,
    userData,
    setUserData,
    pricesData,
    startEdit,
    loggedUserInfo,
    setIsEdit
}) => {
    // console.log(pricesData)
    const dispatch = useDispatch();

    // console.log(userData, 'im here');
    const [annual, setAnnual] = useState();
    const [monthly, setMonthly] = useState();

    const [updateAccount, setUpdateAccount] = useState(false);
    const [choosedPrice, setChoosedPrice] = useState(null);

    let dynamicElements = [
        {
            id: 0,
            type: 'text',
            title: "მომხმარებლის სახელი",
            value: userData?.username,
            placeholder: "გთხოვთ შეავსოთ სახელი",
            onChange: (e) => {
                setUserData((prevUserData) => ({
                    ...prevUserData,
                    username: e.target.value
                }));
            },

            warning: userData?.username ? true : false
        },
        {
            id: 1,
            title: "ელ-ფოსტა",
            type: 'text',
            value: userData?.email,
            placeholder: "გთხოვთ შეავსოთ მეილი",
            onChange: (e) => {
                setUserData((prevUserData) => ({
                    ...prevUserData,
                    email: e.target.value
                }));
            }, warning: userData?.email ? true : false

        },
        {
            id: 2,
            title: "ტელეფონის ნომერი",
            value: userData?.phoneNumber,
            type: 'number',
            placeholder: "გთხოვთ დაამატოთ მობილურის ნომერი",
            onChange: (e) => {
                setUserData((prevUserData) => ({
                    ...prevUserData,
                    phoneNumber: e.target.value
                }));
            }, warning: userData?.phoneNumber ? true : false
        },

    ];

    useEffect(() => {
        if (userData.payment_duration === 'month') {
            setMonthly(true);
            setAnnual(false);
        } else {
            setAnnual(true);
            setMonthly(false);
        }
    }, [userData]);

    // console.log(userData, 'user data orig')
    // console.log(choosedPrice, 'price')
    // console.log(pricesData, 'prices data')
    // console.log(userData)
    const sendUserUpdatedInfo = async () => {
        try {
            await axios
                .put(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users/${authUserId}`, {
                    username: userData?.username,
                    email: userData?.email,
                    phoneNumber: userData?.phoneNumber,
                    payment_duration: userData?.payment_duration,
                    payment_plan: userData?.connect?.id,
                    card_number: userData?.card_number,
                    card_cvc: userData?.card_cvc,
                    card_month: userData?.card_month,
                    card_year: userData?.card_year
                })
                .then((res) => {
                    const data = res.data;

                    dispatch(setAuthEmail(data?.email));
                    loggedUserInfo();
                    setIsEdit(false)
                    // onClose();

                    notify(false, "მომხმარებლის ინფორმაცია დარედაქტირდა");

                })
        } catch (error) {
            console.log(error);
            notify(true, "მომხმარებლის ინფორმაციის რედაქტირება უარყოფილია 123123123123");

        }

    };
    return (
        <div>
            {dynamicElements.map((el, index) => (
                <div className={styles.inputs_control} key={index}>
                    <h3 style={{ opacity: !startEdit ? '0.7' : '1', transition: '0.6s' }}>{el.title}</h3>
                    <input type="text"
                        className='form-control'
                        disabled={!startEdit}
                        value={el.value}
                        onChange={el.onChange}
                    />
                    {!el.warning && <span> ! </span>}
                </div>
            ))}
            <div className={styles.priceing_switch}>
                <div
                    style={{ opacity: !startEdit ? '0.7' : '1', transition: '0.6s', pointerEvents: !startEdit ? 'none' : 'auto' }}
                    className={`${"buy-wrap nav-group landing-dark-bg d-inline-flex"}`}
                    data-kt-buttons="true"
                >
                    <a
                        onClick={() => {
                            if (startEdit) {
                                setMonthly(true);
                                setAnnual(false);
                                setUserData((prevSendData) => ({
                                    ...prevSendData,
                                    payment_duration: "month",
                                }));
                            }
                        }}
                        className={`buy-btn custom-padding me-2 btn btn-color-gray-600 btn-active btn-active-success me-2 ${[
                            monthly ? "active" : "",
                        ]} `}
                        data-kt-plan="month"
                    >
                        თვე
                    </a>
                    <a
                        onClick={() => {
                            if (startEdit) {
                                setAnnual(true);
                                setMonthly(false);
                                setUserData((prevSendData) => ({
                                    ...prevSendData,
                                    payment_duration: "year",
                                }));
                            }
                        }}
                        className={`buy-btn custom-padding btn btn-color-gray-600 btn-active btn-active-success ${[
                            annual ? "active" : "",
                        ]} `}
                        data-kt-plan="annual"
                    >
                        წელი
                    </a>
                </div>
                <select
                    className="form-select form-select-solid georgian"
                    disabled={!startEdit}
                    value={userData?.payment_plan?.connect[0]?.id}
                    onChange={(e) => {
                        // console.log(e.target.value)
                        setUserData((prevUserData) => ({
                            ...prevUserData,
                            payment_plan: {
                                connect: [{ id: e.target.value }],
                            },
                        }));
                        setChoosedPrice(e.target.value);
                    }}
                >
                    <option disabled defaultValue="აირჩიეთ გადახდის გეგმა">
                        აირჩიეთ გადახდის გეგმა
                    </option>
                    {pricesData &&
                        pricesData.map((item, index) => {
                            return (
                                <option key={index} value={item.id}>
                                    {item.attributes.name}
                                </option>
                            );
                        })}
                </select>
            </div>
            {pricesData && (
                <div style={{ opacity: !startEdit ? '0.7' : '1', transition: '0.6s' }}>
                    {userData?.payment_plan?.connect[0]?.id === "1" ? (
                        <PriceCard monthly={monthly} priceData={pricesData[0]} />
                    ) : (
                        ""
                    )}
                    {userData?.payment_plan?.connect[0]?.id === "2" ? (
                        <PriceCard monthly={monthly} priceData={pricesData[1]} />
                    ) : (
                        ""
                    )}
                    {userData?.payment_plan?.connect[0]?.id === "3" ? (
                        <PriceCard monthly={monthly} priceData={pricesData[2]} />
                    ) : (
                        ""
                    )}
                </div>
            )}
            <div style={{ opacity: !startEdit ? '0.7' : '1', transition: '0.6s', pointerEvents: !startEdit ? 'none' : 'all' }}>
                {userData?.payment_plan?.connect[0]?.id > 1 &&
                    <PaymentMethod title={'ბარათი ( TBC )'} setEditUserData={setUserData} userData={userData} />

                }
            </div>
            <div
                style={{ opacity: !startEdit ? '0.8' : '1', transition: '0.6s', pointerEvents: !startEdit ? 'none' : 'all' }}
                onClick={sendUserUpdatedInfo}
                className={`${"btn btn-primary"} ${styles.saveBtn}`}>
                შენახვა
            </div >

        </div>
    );
};
export default EditAccount2;
