"use client";

import styles from "./Button.module.css";

function Button({
  children,
  type,
  handleClick,
}: {
  children: React.ReactNode;
  type: "change" | null;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  if (type === "change") {
    return (
      <button className={styles.changeBtn} type="button" onClick={handleClick}>
        {children}
      </button>
    );
  }
  return (
    <button className={styles.clearButton} type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
