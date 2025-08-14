import Insight from "../Insight/Insight";
import styles from "./InsightsWrapper.module.scss";
import Header from "../Heading/Heading";

export default function InsightsWrapper({
  insights,
}: {
  insights: {
    title: string;
    body: string;
    impact: string;
    onTrack: boolean;
  }[];
}) {
  return (
    <div className={styles.insights}>
      <Header title="Insights" className={styles.insights__title} />
      <div className={styles.insights__wrapper}>
        {insights.map((insight) => (
          <Insight key={insight.title} {...insight} />
        ))}
      </div>
    </div>
  );
}
