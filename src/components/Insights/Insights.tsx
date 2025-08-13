import Badge from "../Badge/Badge";
import Card from "../Card/Card";
import "./insights.css";

export default function Insights({
  track,
  title,
  body,
  impact,
}: {
  track: string;
  title: string;
  body: string;
  impact: string;
}) {
  return (
    <Card className="insights">
      <Badge className="badge__track flex-item" track={true}>
        {track}
      </Badge>
      <p className="insights__title">{title}</p>
      <p className="insights__body">{body}</p>
      <Badge className="badge__impact flex-item">{impact}</Badge>
    </Card>
  );
}
