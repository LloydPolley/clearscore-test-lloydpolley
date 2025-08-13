import "./Badge.css";

export default function Badge({
  className,
  children,
  track,
}: {
  className?: string;
  children: string;
  track?: boolean;
}) {
  let trackClass = "";

  switch (track) {
    case true:
      trackClass = "badge__on";
      break;
    case false:
      trackClass = "badge__off";
      break;
    default:
      trackClass = "badge__impact";
      break;
  }

  console.log("trackClass", trackClass);

  return <div className={`badge ${trackClass} ${className}`}>{children}</div>;
}
