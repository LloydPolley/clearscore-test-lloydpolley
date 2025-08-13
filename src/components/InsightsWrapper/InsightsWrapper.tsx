import Insights from "../Insights/Insights";
import "./InsightsWrapper.css";
import Header from "../Heading/Heading";

export default function InsightsWrapper({
  cardsInfo,
}: {
  cardsInfo: {
    title: string;
    body: string;
    impact: string;
  }[];
}) {
  return (
    <>
      <Header title="Insights" />
      <div className="insights-wrapper">
        {cardsInfo.map((card) => (
          <Insights key={card.title} track="On track" {...card} />
        ))}
      </div>
    </>
  );
}
