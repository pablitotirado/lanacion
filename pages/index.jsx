import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import MainContent from "../components/main";
import NavMobile from "../components/navigation-mobile";
import Footer from "../components/footer";

export default function Home() {
  const [scrolling, setScrolling] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setScrolling(window.pageYOffset);
    }, 100);
  }, [scrolling]);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossOrigin="anonymous"
        />
        <title>La Nación</title>
      </Head>
      <Header />
      {!scrolling && <NavMobile />}
      <MainContent />
      <Footer />
    </>
  );
}
