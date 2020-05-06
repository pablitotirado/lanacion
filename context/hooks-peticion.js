import { useState, useEffect } from "react";

export const useFetch = (api) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      fetch(api)
        .then((response) => response.json())
        .then((myJson) => setResponse(myJson.articles.filter((filt) => filt.subtype === "7")));
    } catch (error) {
      setError(error);
    }
  }, []);
  return [response, error];
};
