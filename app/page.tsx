"use client";

import Button from "@/components/Button";
import styles from "./page.module.css";

import { GoArrowSwitch } from "react-icons/go";
import { useState } from "react";

function Page() {
  const [selectedCurrency, setSelectedCurrency] = useState("IRR");

  function handleSwitchCurrencies() {
    setSelectedCurrency((currency) => {
      if (currency === "IRR") {
        return "USD";
      }
      return "IRR";
    });
  }

  return (
    <div className={styles.container}>
      <h1>Exchange Currencies</h1>
      <form className={styles.exchangeForm}>
        <div
          className={`${styles.formInput} ${
            selectedCurrency === "USD"
              ? styles.firstFormInput
              : styles.secondFormInput
          }`}
        >
          <label htmlFor="usd">
            USD <span>(United State of America`s Dollar)</span>
          </label>
          <input
            id="usd"
            name="usdAmount"
            placeholder={
              selectedCurrency === "IRR"
                ? "USD amount"
                : "Enter the amount of USD"
            }
            disabled={selectedCurrency === "IRR"}
          />
        </div>
        <div
          className={`${styles.formInput} ${
            selectedCurrency === "IRR"
              ? styles.firstFormInput
              : styles.secondFormInput
          }`}
        >
          <label htmlFor="irr">
            IRR <span>(Iran`s Rial)</span>
          </label>
          <input
            id="irr"
            name="irrAmount"
            placeholder={
              selectedCurrency === "USD"
                ? "IRR amount"
                : "Enter the amount of IRR"
            }
            disabled={selectedCurrency === "USD"}
          />
        </div>
        <div className={styles.answerContainer}>
          <h2>
            <span>10</span> dollor is <span>9,000,000</span> rials
          </h2>
          <p>USD to IRR exchage rate: 1 USD = 900,000 IRR</p>
        </div>
        <div className={styles.actions}>
          <Button type={null}>Clear Form</Button>
          <Button type="change" handleClick={handleSwitchCurrencies}>
            <GoArrowSwitch />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Page;
