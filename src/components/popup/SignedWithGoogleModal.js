import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import bcrypt from 'bcryptjs';
import axios from "axios";

import { setAuthUserId } from "../../store/slices/authSlice";

import notify from "../../utils/notify";
import styles from "../popup/RegModal.module.css";

const SignedWithGoogleModal = ({ onClose }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [step, setStep] = useState(1);

    const authUserEmail = useSelector((state) => state.auth.email);
    const userJwt = useSelector((state) => state.auth.access_token);

    const userJwtString = JSON.stringify(userJwt);
    const hashedPassword = bcrypt.hashSync(userJwtString, 10);

    const [lossData, setLossData] = useState(false);
    const [backBtn, setBackBtn] = useState(false);

    const [regData, setRegData] = useState({
        username: "",
        email: authUserEmail,
        password: hashedPassword,
        phoneNumber: "",
        userType: "",
        paymentPlan: "",
        paymentMethod: "",
    });

    let errors = {
        stepOne: [],
        stepTwo: [],
        stepThree: [],
    };

    const stepChangeHandler = () => {
        if (step === 1 && errors?.stepOne?.length === 0 && regData?.userType && regData?.username && regData?.email && regData?.phoneNumber) {
            setStep(step + 1);
            setLossData(false);
        } else {
            setLossData(true);
        }
        if (step === 2 && errors?.stepTwo?.length === 0 && regData?.paymentPlan) {
            setStep(step + 1);
            setLossData(false);
        }
        if (step === 3 && errors?.stepThree?.length === 0 && regData?.paymentMethod) {
            setStep(step + 1);
            setLossData(false);
        }
    };

    const prevStepHandler = () => {
        if (step > 1) {
            setBackBtn(true);
            setStep(step - 1);
        }
    };

    const getStatusClass = (stepIndex) => {
        if (stepIndex < step) {
            return "d-none";
        } else if (stepIndex === step) {
            return "d-block";
        } else {
            return "d-none";
        }
    };

    const submitGoogleAuthUserData = async () => {
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/auth/local/register`, {
                username: regData?.username,
                email: regData?.email,
                userType: regData?.userType,
                password: regData?.password,
                phoneNumber: regData?.phoneNumber,
                paymentPlan: regData?.paymentPlan,
                paymentMethod: regData?.paymentMethod
            })
                .then((res) => {
                    const data = res.data;
                    localStorage.setItem("userId", data?.user?.id);
                    dispatch(setAuthUserId(data?.user?.id))
                    notify(false, 'თქვენ წარმატებით გაიარეთ რეგისტრაცია');
                    onClose();
                    router.push('/')
                })
        } catch (err) {
            notify(true, 'რეგისტრაცია უარყოფილია, იმეილი ან სახელი უკვე გამოყენებულია');
            console.log(err)
        }
    };

    return (
        <div className={`${styles.container}`} >
            <form onSubmit={submitGoogleAuthUserData}>
                <div className={`${getStatusClass(1)} col`}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="text-muted">შეავსეთ მოცემული ველები</div>
                        <svg
                            onClick={onClose}
                            className={`${styles.closeBtn}`}
                            width="64px"
                            height="64px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="#CCCCCC"
                                strokeWidth="0.336"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="Menu / Close_MD">
                                    <path
                                        id="Vector"
                                        d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="d-grid gap-2 mt-n1">
                        <div className="d-grid gap-2 mt-n1">
                            <label className="mt-2">მომხმარებლის ტიპი:</label>
                            <select
                                required
                                style={{ borderColor: lossData && regData.userType.length <= 0 ? "red" : "" }}
                                className="form-select form-select-solid georgian"
                                defaultValue="აირჩიეთ მომხმარებლის ტიპი"
                                onChange={(e) => {
                                    setRegData((prevSendData) => ({
                                        ...prevSendData,
                                        userType: e.target.value
                                    }));
                                }}
                            >
                                <option disabled defaultValue="აირჩიეთ მომხმარებლის ტიპი">აირჩიეთ მომხმარებლის ტიპი</option>
                                <option id="1" value="personal">პერსონალური</option>
                                <option id="2" value="company">კომპანია</option>
                            </select>
                            {lossData && regData.userType.length <= 0 && <p style={{ color: 'red' }}>გთხოვთ აირჩიოთ მომხმარებლის ტიპი</p>}
                        </div>
                        {regData && (
                            <label className="mt-2">
                                {regData?.userType === "company"
                                    ? "კომპანიის სახელი"
                                    : regData?.userType === "personal"
                                        ? "სრული სახელი"
                                        : "სახელი"}
                            </label>
                        )}
                        <input
                            style={{ borderColor: lossData && regData.username.length <= 0 ? "red" : "" }}
                            autoComplete="username"
                            required
                            id="fullName"
                            className="form-control"
                            placeholder="სახელი"
                            type="text"
                            onChange={(e) => {
                                setRegData((prevSendData) => ({
                                    ...prevSendData,
                                    username: e.target.value
                                }))
                            }}
                        />
                        {lossData && regData.username.length <= 3 && <p style={{ color: 'red' }}>გთხოვთ შეიყვანოთ სახელი</p>}
                    </div>
                    <div className="d-grid gap-2 mt-n1">
                        <label className="mt-2">იმეილი:</label>
                        <input
                            autoComplete="email"
                            required
                            id="email"
                            className="form-control"
                            placeholder="youremail@gmail.com"
                            name="email"
                            type="email"
                            defaultValue={authUserEmail}
                            disabled
                            onChange={(e) => {
                                setRegData((prevSendData) => ({
                                    ...prevSendData,
                                    email: e.target.value
                                }))
                            }}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-n1">
                        <label className="mt-2">ტელეფონის ნომერი:</label>
                        <input
                            style={{ borderColor: lossData && regData.phoneNumber.length !== 9 ? "red" : "" }}
                            autoComplete="phoneNumber"
                            required
                            id="phoneNumber"
                            className="form-control"
                            placeholder="555555555"
                            type="tel"
                            pattern="[0-9]{9}"
                            onChange={(e) => {
                                setRegData((prevSendData) => ({
                                    ...prevSendData,
                                    phoneNumber: e.target.value
                                }))
                            }}
                        />
                        {lossData && regData.phoneNumber.length !== 9 && <p style={{ color: 'red' }}>გთხოვთ შეიყვანოთ მობილურის ნომერი</p>}
                    </div>
                    <div className="d-grid gap-2">
                        <button
                            className={` btn btn-success georgian ${styles.btn}`}
                            type="button"
                            onClick={stepChangeHandler}
                        >
                            შემდეგ
                        </button>
                    </div>
                </div>

                <div className={getStatusClass(2)}>
                    <div className="col">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="text-muted">რეგისტრაცია</div>
                            <svg
                                onClick={onClose}
                                className={`${styles.closeBtn}`}
                                width="64px"
                                height="64px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="#CCCCCC"
                                    strokeWidth="0.336"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Menu / Close_MD">
                                        <path
                                            id="Vector"
                                            d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                                            stroke="#000000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="d-grid gap-2 mt-n1">
                            <div className="d-grid gap-2 mt-n1">
                                <label className="mt-2">აირჩიეთ გადახდის გეგმა:</label>
                                <select
                                    required
                                    style={{ borderColor: lossData && regData?.paymentPlan?.length === 0 ? "red" : "" }}
                                    className="form-select form-select-solid georgian"
                                    defaultValue="აირჩიეთ გადახდის გეგმა"
                                    onChange={(e) => {
                                        setRegData((prevSendData) => ({
                                            ...prevSendData,
                                            paymentPlan: e.target.value
                                        }));
                                    }}
                                >
                                    <option disabled defaultValue="აირჩიეთ გადახდის გეგმა">აირჩიეთ გადახდის გეგმა</option>
                                    <option id="1" value="free">უფასო</option>
                                    <option id="2" value="paid">ფასიანი</option>
                                </select>
                            </div>
                            {lossData && regData?.paymentPlan?.length === 0 && <p style={{ color: 'red' }}>გთხოვთ აირჩიოთ გადახდის გეგმა</p>}
                            <div className="d-flex justify-content-evenly">
                                <button
                                    className={` btn btn-success georgian ${styles.btn}`}
                                    type="button"
                                    onClick={prevStepHandler}
                                    style={{
                                        display: step === 1 ? "none" : "",
                                        width: "43%"
                                    }}
                                >
                                    უკან
                                </button>
                                <button
                                    style={{ width: "43%" }}
                                    className={` btn btn-success georgian ${styles.btn}`}
                                    type={regData?.paymentPlan === "free" ? 'button' : 'button'}
                                    onClick={() => {
                                        if (regData?.paymentPlan === "paid") {
                                            stepChangeHandler();
                                        } else if (regData?.paymentPlan.length === 0) {
                                            stepChangeHandler();
                                        } else if (regData?.paymentPlan === "free") {
                                            submitGoogleAuthUserData()
                                        }
                                    }}
                                >
                                    {regData?.paymentPlan === "free" ? 'რეგისტრაცია' : 'შემდეგ'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={getStatusClass(3)}>
                    <div className="col">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="text-muted">რეგისტრაცია</div>
                            <svg
                                onClick={onClose}
                                className={`${styles.closeBtn}`}
                                width="64px"
                                height="64px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="#CCCCCC"
                                    strokeWidth="0.336"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Menu / Close_MD">
                                        <path
                                            id="Vector"
                                            d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                                            stroke="#000000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="d-grid gap-2 mt-n1">
                            <div className="d-grid gap-2 mt-n1">
                                <label className="mt-2">აირჩიეთ გადახდის მეთოდი:</label>
                                <select
                                    required
                                    style={{ borderColor: lossData && regData?.paymentMethod?.length === 0 ? "red" : "" }}
                                    className="form-select form-select-solid georgian"
                                    defaultValue="აირჩიეთ გადახდის მეთოდი"
                                    onChange={(e) => {
                                        setRegData((prevSendData) => ({
                                            ...prevSendData,
                                            paymentMethod: e.target.value
                                        }));
                                    }}
                                >
                                    <option disabled value="აირჩიეთ გადახდის მეთოდი">აირჩიეთ გადახდის მეთოდი</option>
                                    <option id="1" value="tbc">TBC</option>
                                    <option id="2" value="bog">BOG</option>
                                </select>
                            </div>
                            {lossData && regData?.paymentMethod?.length === 0 && <p style={{ color: 'red' }}>გთხოვთ აირჩიოთ გადახდის მეთოდი</p>}
                            <div className="d-flex align-items-center justify-content-evenly">
                                <button
                                    className={` btn btn-success georgian ${styles.btn}`}
                                    type="button"
                                    onClick={prevStepHandler}
                                    style={{ width: "35%" }}
                                >
                                    უკან
                                </button>
                                <button
                                    className={` btn btn-success georgian ${styles.btn}`}
                                    type={regData?.paymentMethod?.length === 0 ? "button" : "button"}
                                    onClick={() => regData?.paymentMethod?.length === 0 ? stepChangeHandler() : submitGoogleAuthUserData()}
                                >
                                    რეგისტრაცია
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignedWithGoogleModal;