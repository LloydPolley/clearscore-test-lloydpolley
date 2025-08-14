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
  return (
    <Card className={styles.insight}>
      <Badge className={styles.badge__track} variant={onTrack ? "on" : "off"}>
        {onTrack ? onTrackText : offTrackText}
      </Badge>
      <p className={styles.insight__title}>{title}</p>
      <p className={styles.insight__body}>{body}</p>
      <Badge className={styles.badge__impact} variant="impact">
        {impact}
      </Badge>
    </Card>
  );
}
