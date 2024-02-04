"use client";
import { useEffect } from "react";
import styles from "../app/Home.module.css";

type props = {
  className: string;
  label: string;
  value: string;
  setInputValue: Function;
  refresh: boolean;
  setRefresh: Function;
};

export default function Input({
  className,
  label,
  value,
  setInputValue,
  refresh,
  setRefresh,
}: props) {
  const handleFocus = () => {
    const placeHolder: HTMLElement | null = document.querySelector(
      `.${styles.inputPlaceHolder}`,
    );
    if (!placeHolder) return;
    placeHolder.style.transform = `translateY(-150%)`;
    placeHolder.style.setProperty("color", "#1f8a9c", "important");
  };

  const handleBlur = () => {
    const placeHolder: HTMLElement | null = document.querySelector(
      `.${styles.inputPlaceHolder}`,
    );
    if (!placeHolder) return;
    placeHolder.style.setProperty("color", "white", "important");
    if (value !== "") return;
    placeHolder.style.transform = `translateY(0%)`;
  };

  useEffect(() => {
    if (!refresh) return;
    setInputValue("");
  }, [refresh, setInputValue]);

  const handleInput = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={className}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleInput}
        value={value}
      />
      <p className={styles.inputPlaceHolder}>{label}</p>
    </div>
  );
}
