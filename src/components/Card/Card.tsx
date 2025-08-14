import type { ReactNode } from "react";
import styles from "./Card.module.scss";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}
