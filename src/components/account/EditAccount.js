import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthEmail } from "../../store/slices/authSlice";
import PriceCard from "../ui/PriceCard";
import PaymentMethod from "../popup/PaymentMethod";
import notify from "../../utils/notify";

import styles from "./EditAccount.module.css";
import ArrowDownSvg from "../svg/ArrowDownSvg";

const EditAccount = ({
  authUserId,
  userData,
  setUserData,
  pricesData,
  startEdit,
  loggedUserInfo,
  setIsEdit,
}) => {
  const dispatch = useDispatch();

  const [annual, setAnnual] = useState();
  const [monthly, setMonthly] = useState();

  const [updateAccount, setUpdateAccount] = useState(false);
  const [choosedPrice, setChoosedPrice] = useState(null);

  let dynamicElements = [
    {
      id: 0,
      type: "text",
      title: "მომხმარებლის სახელი",
      value: userData?.username,
      placeholder: "გთხოვთ შეავსოთ სახელი",
      onChange: (e) => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          username: e.target.value,
        }));
      },

      warning: userData?.username ? true : false,
    },
    {
      id: 1,
      title: "მომხმარებლის ტიპი",
      value: userData?.role,
      type: "select",
      options: [
        { value: "user", title: "პერსონალური" },
        { value: "admin", title: "კომპანია" },
      ],
      onChange: (e) => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          userType: e.target.value,
        }));
      },
    },
    {
      id: 2,
      title: "ელ-ფოსტა",
      type: "text",
      value: userData?.email,
      placeholder: "გთხოვთ შეავსოთ მეილი",
      onChange: (e) => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          email: e.target.value,
        }));
      },
      warning: userData?.email ? true : false,
    },
    {
      id: 3,
      title: "ტელეფონის ნომერი",
      value: userData?.phoneNumber,
      type: "tel",
      placeholder: "გთხოვთ დაამატოთ მობილურის ნომერი",
      onChange: (e) => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          phoneNumber: e.target.value,
        }));
      },
      warning: userData?.phoneNumber ? true : false,
    },
  ];

  useEffect(() => {
    if (userData.payment_duration === "month") {
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
  // console.log(userData.payment_plan.connect[0].id)
  const sendUserUpdatedInfo = async () => {
    try {
      await axios
        .put(
          `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users/${authUserId}`,
          {
            username: userData?.username,
            email: userData?.email,
            phoneNumber: userData?.phoneNumber,
            payment_duration: userData?.payment_duration,
            payment_plan: {
              connect: [{ id: userData.payment_plan.connect[0].id }],
            },
            card_number: userData?.card_number,
            card_cvc: userData?.card_cvc,
            card_month: userData?.card_month,
            card_year: userData?.card_year,
          }
        )
        .then((res) => {
          const data = res.data;

          dispatch(setAuthEmail(data?.email));
          loggedUserInfo();
          setIsEdit(false);
          // onClose();

          notify(false, "მომხმარებლის ინფორმაცია დარედაქტირდა");
        });
    } catch (error) {
      console.log(error);
      notify(
        true,
        "მომხმარებლის ინფორმაციის რედაქტირება უარყოფილია 123123123123"
      );
    }
  };
  return (
    <div className={styles.mainWrapper}>
      {dynamicElements.map((el, index) => (
        <div key={index} className={styles.inputs_control_wrapper}>
          <div className={styles.inputs_control}>
            <h3
              className={styles.userInfoTitle}
              style={{ opacity: !startEdit ? "0.7" : "1" }}
            >
              {el.title}
            </h3>
            {el.type !== "select" ? (
              <input
                type={el.type}
                className="form-control"
                disabled={!startEdit}
                value={el.value}
                onChange={el.onChange}
              />
            ) : (
              <div style={{ position: "relative" }}>
                <select className="form-control" disabled={!startEdit}>
                  {el.title}
                  {el.options.map((el, index) => (
                    <option key={index} value={el.value}>
                      {el.title}
                    </option>
                  ))}
                </select>
                <ArrowDownSvg />
              </div>
            )}
            {el.type !== "select" && !el.warning && <span> ! </span>}
          </div>
          <div className={styles.bottomLine}></div>
        </div>
      ))}
      <div className={styles.inputs_control}>
        <h3
          className={styles.userInfoTitle}
          style={{ opacity: !startEdit ? "0.7" : "1" }}
        >
          გადახდის გეგმა
        </h3>
        <div
          style={{
            position: "relative",
            marginBottom: "20px",
          }}
        >
          <select
            className="form-control"
            disabled={!startEdit}
            value={userData?.payment_plan?.connect[0]?.id}
            onChange={(e) => {
              setUserData((prevUserData) => ({
                ...prevUserData,
                payment_plan: {
                  connect: [{ id: e.target.value }],
                },
              }));
              setChoosedPrice(e.target.value);
            }}
          >
            {pricesData &&
              pricesData.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.attributes.name}
                  </option>
                );
              })}
          </select>
          <ArrowDownSvg />
        </div>
      </div>
      <div
        className={styles.priceing_switch}
        style={{
          maxHeight: startEdit ? "1000px" : "0",
          overflow: "hidden",
          transition: "0.6s",
          width: "320px",
        }}
      >
        <div
          style={{
            opacity: !startEdit ? "0.7" : "1",
            transition: "0.6s",
            pointerEvents: !startEdit ? "none" : "auto",
          }}
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
        {pricesData && (
          <div
            style={{
              opacity: !startEdit ? "0.7" : "1",
              transition: "0.6s",
            }}
          >
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
        <div
          style={{
            opacity: !startEdit ? "0.7" : "1",
            transition: "0.6s",
            pointerEvents: !startEdit ? "none" : "all",
          }}
        >
          {userData?.payment_plan?.connect[0]?.id > 1 && (
            <PaymentMethod
              title={"ბარათი ( TBC )"}
              setEditUserData={setUserData}
              userData={userData}
            />
          )}
        </div>
        <div
          style={{
            opacity: !startEdit ? "0.8" : "1",
            transition: "0.6s",
            pointerEvents: !startEdit ? "none" : "all",
          }}
          onClick={sendUserUpdatedInfo}
          className={`${"btn btn-primary"} ${styles.saveBtn}`}
        >
          შენახვა
        </div>
      </div>
    </div>
  );
};
export default EditAccount;
