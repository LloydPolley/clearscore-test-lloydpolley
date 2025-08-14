import styles from "./Heading.module.scss";

export default function Heading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return <h1 className={`${styles.headline} ${className}`}>{title}</h1>;
}
