import React from "react";
import GlobalState from "../context/state";


const App = ({ Component, pageProps }) => {
  return (
    <GlobalState>
      <Component {...pageProps} />
    </GlobalState>
  );
};

export default App;
