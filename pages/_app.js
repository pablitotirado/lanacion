import React from "react";
import GlobalState from "../context/state";
import { GlobalStyle } from "../global-styles";

const App = ({ Component, pageProps }) => {
  return (
    <GlobalState>
      <GlobalStyle />
      <Component {...pageProps} />
    </GlobalState>
  );
};

export default App;
