import { useState, useEffect } from "react";
import { generateInsights } from "../../utils/generateInsights";
import type { InsightType } from "../../types";

export default function useInsights(url: string) {
  const [insights, setInsights] = useState<InsightType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(undefined);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setInsights(generateInsights(data));
      } catch (err: Error | any) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { insights, loading, error };
}
