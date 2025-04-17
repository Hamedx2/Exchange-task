"use client";

import {
  DOLLAR_TO_RIAL_RATE,
  dollarToRial,
  rialToDollar,
} from "@/helper/helper";
import styles from "./Form.module.css";
import { useState } from "react";
import Button from "./Button";
import { GoArrowSwitch } from "react-icons/go";

function Form() {
  const [selectedCurrency, setSelectedCurrency] = useState<"IRR" | "USD">(
    "IRR"
  );
  const [dollarAmount, setDollarAmount] = useState<number>(0);
  const [rialAmount, setRialAmount] = useState<number>(0);

  const dollarSelected = selectedCurrency === "USD";
  const rialSelected = selectedCurrency === "IRR";

  function handleSwitchCurrencies() {
    setDollarAmount(0);
    setRialAmount(0);
    setSelectedCurrency((currency) => {
      if (currency === "IRR") {
        return "USD";
      }
      return "IRR";
    });
  }

  function handleUpdateAmount(e: React.ChangeEvent<HTMLInputElement>) {
    const amount = +e.target.value;

    if (typeof amount !== "number") {
      setRialAmount(0);
      setDollarAmount(0);
      return;
    }

    if (rialSelected) {
      if (amount < 0) setRialAmount(0);
      else setRialAmount(amount);
      const calculatedValue = rialToDollar(amount);
      setDollarAmount(calculatedValue);
    }
    if (dollarSelected) {
      if (amount < 0) setDollarAmount(0);
      else setDollarAmount(amount);
      const calculatedValue = dollarToRial(amount);
      setRialAmount(calculatedValue);
    }
  }

  function handleClearForm() {
    setDollarAmount(0);
    setRialAmount(0);
  }

  return (
    <form className={styles.exchangeForm}>
      <div
        className={`${styles.formInput} ${
          dollarSelected ? styles.firstFormInput : styles.secondFormInput
        }`}
      >
        <label htmlFor="usd">
          USD <span>(United State of America`s Dollar)</span>
        </label>
        <input
          id="usd"
          name="usdAmount"
          type={dollarSelected ? "number" : undefined}
          placeholder={rialSelected ? "USD amount" : "Enter the amount of USD"}
          disabled={rialSelected}
          value={dollarAmount || ""}
          onChange={dollarSelected ? handleUpdateAmount : undefined}
        />
      </div>
      <div
        className={`${styles.formInput} ${
          rialSelected ? styles.firstFormInput : styles.secondFormInput
        }`}
      >
        <label htmlFor="irr">
          IRR <span>(Iran`s Rial)</span>
        </label>
        <input
          id="irr"
          name="irrAmount"
          type={rialSelected ? "number" : undefined}
          placeholder={
            dollarSelected ? "IRR amount" : "Enter the amount of IRR"
          }
          disabled={dollarSelected}
          value={rialAmount || ""}
          onChange={rialSelected ? handleUpdateAmount : undefined}
        />
      </div>
      <div className={styles.answerContainer}>
        <h2>
          <span>{dollarSelected ? dollarAmount : rialAmount} </span>
          {dollarSelected ? "Dollar" : "Rials"} is
          <span> {dollarSelected ? rialAmount : dollarAmount} </span>
          {dollarSelected ? "Rials" : "Dollar"}
        </h2>
        <p>
          <span>{dollarSelected ? dollarAmount : rialAmount / 10} </span>
          {dollarSelected ? "Dollar" : "Toman"} is
          <span> {dollarSelected ? rialAmount / 10 : dollarAmount} </span>
          {dollarSelected ? "Toman" : "Dollar"}
        </p>
        <p>USD to IRR exchage rate: 1 USD = {DOLLAR_TO_RIAL_RATE} IRR</p>
      </div>
      <div className={styles.actions}>
        <Button type={null} handleClick={handleClearForm}>
          Clear Form
        </Button>
        <Button type="change" handleClick={handleSwitchCurrencies}>
          <GoArrowSwitch />
        </Button>
      </div>
    </form>
  );
}

export default Form;
