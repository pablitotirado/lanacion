import React from "react";
import Head from "next/head";
import { GlobalStyle } from "../global-styles";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <html lang="es" />
        <title>La Nación</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
