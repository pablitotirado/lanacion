import React, { useState, useEffect } from "react";
import Header from "../components/header";
import MainContent from "../components/main";
import NavMobile from "../components/navigation-mobile";
import Footer from "../components/footer";
import fetch from "isomorphic-unfetch";

export default function Home({ posts }) {
  const [scrolling, setScrolling] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setScrolling(window.pageYOffset);
    }, 100);
  }, [scrolling]);

  return (
    <>
      <Header />
      {!scrolling && <NavMobile />}
      <MainContent response={posts.articles} />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://api-test-ln.herokuapp.com/articles");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
