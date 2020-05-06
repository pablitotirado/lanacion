import { useReducer } from "react";
import ContextNacion from "./context";
import { useFetch } from "./hooks-peticion";

const GlobalState = ({ children }) => {
  const [response, error] = useFetch("https://api-test-ln.herokuapp.com/articles");

  return <ContextNacion.Provider value={{ response }}>{children}</ContextNacion.Provider>;
};

export default GlobalState;
