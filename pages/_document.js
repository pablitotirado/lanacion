import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GlobalStyle } from "../global-styles";

export default class SiteDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet(<GlobalStyle />);
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement(
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
        crossOrigin="anonymous"
      />
    );
    return (
      <html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
