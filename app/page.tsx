"use client";

import Button from "@/components/Button";
import styles from "./page.module.css";

import { GoArrowSwitch } from "react-icons/go";
import { useState } from "react";

const DOLLAR_TO_RIAL_RATE = 880000;

function dollarToRial(dollar: number) {
  if (dollar === 0) return 0;
  return dollar * DOLLAR_TO_RIAL_RATE;
}

function rialToDollar(rial: number) {
  if (rial === 0) return 0;
  return (rial / DOLLAR_TO_RIAL_RATE).toFixed(8);
}

function Page() {
  const [selectedCurrency, setSelectedCurrency] = useState("IRR");
  const [dollarAmount, setDollarAmount] = useState(0);
  const [rialAmount, setRialAmount] = useState(0);

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
    if (rialSelected) {
      if (+e.target.value < 0) setRialAmount(0);
      setRialAmount(+e.target.value);
    }
    if (+e.target.value < 0) setDollarAmount(0);
    setDollarAmount(+e.target.value);
  }

  function handleClearForm() {
    setDollarAmount(0);
    setRialAmount(0);
  }

  return (
    <div className={styles.container}>
      <h1>___Exchange Currencies___</h1>
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
            placeholder={
              rialSelected ? "USD amount" : "Enter the amount of USD"
            }
            disabled={rialSelected}
            defaultValue={dollarAmount}
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
            placeholder={
              dollarSelected ? "IRR amount" : "Enter the amount of IRR"
            }
            disabled={dollarSelected}
            defaultValue={rialAmount}
            onChange={rialSelected ? handleUpdateAmount : undefined}
          />
        </div>
        <div className={styles.answerContainer}>
          <h2>
            <span>10</span> dollor is <span>9,000,000</span> rials
          </h2>
          <p>USD to IRR exchage rate: 1 USD = 900,000 IRR</p>
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
    </div>
  );
}

export default Page;
