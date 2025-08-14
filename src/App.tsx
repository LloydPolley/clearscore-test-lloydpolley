import InsightsWrapper from "./components/InsightsWrapper/InsightsWrapper";
import useInsights from "./hooks/useInsights";
import { URL } from "./constants";

function App() {
  const { insights, loading, error } = useInsights(URL);

  return (
    <>
      {insights && <InsightsWrapper insights={insights} />}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </>
  );
}

export default App;
