import type { ReactNode } from "react";
import "./Card.css";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`card ${className}`}>{children}</div>;
}
