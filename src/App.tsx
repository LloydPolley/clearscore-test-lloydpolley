import InsightsWrapper from "./components/InsightsWrapper/InsightsWrapper";
import useInsights from "./hooks/useInsights/useInsights";
import { URL } from "./constants";
import Modal from "./components/Modal/Modal";

function App() {
  const { insights, loading, error } = useInsights(URL);

  return (
    <>
      {insights && <InsightsWrapper insights={insights} />}
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching insights</p>}
      <Modal />
    </>
  );
}

export default App;
