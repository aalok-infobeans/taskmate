import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); // fetched data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController(); // for canceling fetch
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, { signal });
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort(); // cleanup on unmount
  }, [url]);
  return { data, loading, error };
};
export default useFetch;
