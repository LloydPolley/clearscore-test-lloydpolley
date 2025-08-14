import type { ReactNode } from "react";
import styles from "./Badge.module.scss";

type BadgeVariant = "on" | "off" | "impact";

interface BadgeProps {
  variant: BadgeVariant;
  children: ReactNode;
  className?: string;
}

export default function Badge({
  variant,
  children,
  className = "",
}: BadgeProps) {
  const variantClass = styles[`badge--${variant}`];

  return (
    <div className={`${styles.badge} ${variantClass} ${className}`}>
      {children}
    </div>
  );
}
