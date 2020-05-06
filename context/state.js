import { useEffect, useState } from "react";
import ContextNacion from "./context";

const GlobalState = props => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    async function Fetch() {
      await fetch("https://api-test-ln.herokuapp.com/articles")
        .then(response => response.json())
        .then(myJson =>
          setResponse(myJson.articles.filter(filt => filt.subtype === "7"))
        );
    }
    Fetch();
  }, []);

  return (
    <ContextNacion.Provider value={{ response }}>
      {props.children}
    </ContextNacion.Provider>
  );
};

export default GlobalState;
