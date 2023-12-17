"use client";

import Image from "next/image";
import styles from "./button.module.css";
import { ButtonProps } from "./button.utils";

const Button = ({ text, icon, onClick }: ButtonProps) => {
  return (
    <div className={styles["button-wrapper"]} onClick={onClick}>
      <Image
        className={styles["add-icon"]}
        alt="button icon"
        src={icon}
        width={15}
        height={15}
      />
      <button className={styles.button}>{text}</button>
    </div>
  );
};

export default Button;
