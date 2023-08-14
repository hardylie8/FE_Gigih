import { useState, useEffect } from "react";
import { defaultInstance } from "../api/AxiosInstance";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await defaultInstance.get(url);
        if (response.status === 200) {
          setData(response.data.data);
        } else {
          setHasError(true);
          setErrorMessage("response");
        }
        setIsLoading(false);
      } catch (err) {
        setHasError(true);
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, isLoading, hasError, errorMessage, setData };
};
