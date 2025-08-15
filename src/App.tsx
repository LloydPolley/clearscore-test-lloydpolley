import InsightsWrapper from "./components/InsightsWrapper/InsightsWrapper";
import useInsights from "./hooks/useInsights/useInsights";
import { URL } from "./constants";
import Modal from "./components/Modal/Modal";

function App() {
  const { insights, loading, error } = useInsights(URL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching insights</p>;
  if (!insights?.length) return <p>No insights found</p>;

  return (
    <>
      <InsightsWrapper insights={insights} />
      <Modal />
    </>
  );
}

export default App;
