'use client'

import { useEffect, useState } from "react";
import styles from "./Alert.module.scss";

type AlertProps = {
  message: string;
  type: "success" | "error" | "info";
};

export default function Alert({ message, type }: AlertProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return <div className={`${styles.alert} ${styles[type]}`}>{message}</div>;
}
