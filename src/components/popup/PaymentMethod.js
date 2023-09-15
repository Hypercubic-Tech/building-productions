import React, { useState } from "react";
import styles from "../popup/RegModal.module.css";

const PaymentMethod = ({ setEditUserData }) => {
  const [cardNumberValue, setCardNumberValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const isValidCardNumber = (cardNum) => {
    if (/[^0-9-\s]+/.test(cardNum)) return false;

    let cardNumberWithoutDashes = cardNum.replace(/\D/g, "");

    if (cardNumberWithoutDashes.length !== 16) return false;

    let sum = 0;
    let isEven = false;

    for (let i = cardNumberWithoutDashes.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumberWithoutDashes.charAt(i), 10);

      if (isEven) {
        if ((digit *= 2) > 9) digit -= 9;
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  };

  function formatCardNumber(cardNumber) {
    const numericValue = cardNumber.replace(/\D/g, "");
    const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, "$1 ");

    return formattedValue;
  }
  
  return (
    <div className="d-grid gap-2 mt-n1">
      <h2 className="mt-2">Payment Method:</h2>
      <input
        style={{
          backgroundColor: isValidCardNumber(cardNumberValue) ? "" : "red",
        }}
        required
        min="0"
        className={`form-control ${styles.noArrow} ${styles.cardNumberInput}`}
        placeholder="Card Number"
        type="text"
        value={formatCardNumber(cardNumberValue)}
        onChange={(e) => {
          let value = e.target.value;
          value = value.replace(/\D/g, "");

          if (value.length <= 16) {
            setCardNumberValue(value);
            setEditUserData((prevSendData) => ({
              ...prevSendData,
              cardNumber: value,
            }));
          }
        }}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          style={{
            width: "50%",
            fontSize: "18px",
          }}
          required
          min="0"
          className={`form-control ${styles.noArrow}`}
          placeholder="CVC"
          type="number"
          value={inputValue}
          onChange={(e) => {
            let value = e.target.value;
            if (/^\d{0,3}$/.test(value)) {
              setInputValue(value);
            }
            setEditUserData((prevSendData) => ({
              ...prevSendData,
              cvc: value,
            }));
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "50%",
            alignItems: "center",
          }}
        >
          <input
            style={{ fontSize: "18px" }}
            required
            min="0"
            max="12"
            className={`form-control ${styles.noArrow}`}
            placeholder="Month"
            type="number"
            value={monthValue}
            onChange={(e) => {
              let value = e.target.value;
              if (/^\d{0,2}$/.test(value)) {
                setMonthValue(value);
              }
              setEditUserData((prevSendData) => ({
                ...prevSendData,
                month: value,
              }));
            }}
          />
          <div
            style={{
              height: "80%",
              width: "4px",
              backgroundColor: "grey",
              transform: "rotate(18deg)",
            }}
          ></div>
          <input
            style={{ fontSize: "18px" }}
            required
            min="5"
            max="99"
            className={`form-control ${styles.noArrow}`}
            placeholder="Year"
            type="number"
            value={yearValue}
            onChange={(e) => {
              let value = e.target.value;
              if (/^\d{0,2}$/.test(value)) {
                setYearValue(value);
              }
              setEditUserData((prevSendData) => ({
                ...prevSendData,
                year: value,
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
