'use client';

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  onClick: () => void;
}

export default function Button({ text, variant, onClick }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
}
