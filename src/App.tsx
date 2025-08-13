import InsightsWrapper from "./components/InsightsWrapper/InsightsWrapper";

const cardsInfo = [
  {
    title: "Electoral roll",
    body: "Being on the electoral roll can improve your score",
    impact: "Medium Impact",
  },
  {
    title: "Public information",
    body: "Bankruptcies and individual voluntary arrangements can damage your score",
    impact: "High Impact",
  },
  {
    title: "Credit utilisation",
    body: "Using more than 50% of your available credit can damage your score",
    impact: "Medium Impact",
  },
];

function App() {
  // const { data } = useInsights(URL);

  // console.log("data", data);

  return (
    <div className="">
      <InsightsWrapper cardsInfo={cardsInfo} />
    </div>
  );
}

export default App;
