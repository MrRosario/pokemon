import { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = (url) => {
    setIsLoading(true);
    setData(null);
    setError(null);

    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setData(res);
      })
      .catch(() => {
        setIsLoading(false);
        setError("An error occurred. Awkward..");
      });
  };

  return { fetch, data, isLoading, error };
};

export default useFetch;
