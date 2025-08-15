import Badge from "../Badge/Badge";
import Card from "../Card/Card";
import styles from "./Insight.module.scss";
import { onTrackText, offTrackText } from "../../constants";

export default function Insight({
  title,
  body,
  onTrack,
  impact,
}: {
  title: string;
  body: string;
  onTrack: boolean;
  impact: string;
}) {
  const isOnTrackText = onTrack ? onTrackText : offTrackText;
  const openModal = () => {
    window.dispatchEvent(
      new CustomEvent("openModal", {
        detail: {
          onTrack,
          isOnTrackText,
        },
      })
    );
  };

  return (
    <Card className={styles.insight}>
      <Badge className={styles.badge__track} variant={onTrack ? "on" : "off"}>
        {isOnTrackText}
      </Badge>
      <p className={styles.insight__title}>{title}</p>
      <p className={styles.insight__body}>{body}</p>
      {title === "Electoral roll" && (
        <button className={styles.insight__button} onClick={openModal}>
          Learn More
        </button>
      )}
      <Badge className={styles.badge__impact} variant="impact">
        {impact}
      </Badge>
    </Card>
  );
}
