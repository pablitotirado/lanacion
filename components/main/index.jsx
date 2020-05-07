import React, { useContext } from "react";
import ContextNacion from "../../context/context";
import Link from "next/link";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  @media (min-width: 768px) {
    margin: 0 2rem;
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
`;
const TitleMain = styled.h1`
  width: max-content;
  font-size: 30px;
  font-weight: 500;
  font-family: Georgia, "Times New Roman", Times, serif;
  border-bottom: 3px solid black;
  margin-left: 0.5rem;
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;
const ContainerMainTitles = styled.div`
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    overflow: initial;
    width: 95%;
  }
`;
const MainTitles = styled.a`
  font-size: 14px;
  color: #0074c4;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:last-of-type {
    div {
      display: none;
    }
  }

  &:first-of-type {
    margin-left: 0.5rem;
  }
`;
const SeparatorTitles = styled.div`
  font-size: 2rem;
  margin-top: 0.3rem;
  margin: 0 0.5rem;
`;
const GridArticles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;
const Card = styled.article`
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 45%;
    justify-content: space-around;
  }
  @media (min-width: 1024px) {
    flex-basis: 30%;
  }
`;
const ImageCard = styled.img`
  width: 100%;
  height: 177px;

  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const DescriptionCard = styled.a`
  font-family:  font-family: Georgia, "Times New Roman", Times, serif;
  cursor: pointer;
`;
const DateCard = styled.p`
  color: #5a5a5a;
  font-size: 14px;
`;

const Main = () => {
  const { response } = useContext(ContextNacion);

  const responseSort = response.sort((a, b) => {
    if (a.taxonomy.tags > b.taxonomy.tags) {
      return 1;
    }
    if (a.taxonomy.tags < b.taxonomy.tags) {
      return -1;
    }
    return 0;
  });

  const configDates = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  console.log(responseSort);

  return (
    <MainContainer>
      <TitleMain>Acumulado Grilla</TitleMain>
      <ContainerMainTitles>
        {responseSort.slice(0, 9).map((res) => (
          <Link key={res._id} href={`#/tema/${res.taxonomy.tags[0].slug}`}>
            <MainTitles>
              {res.taxonomy.tags[0].text} <SeparatorTitles>·</SeparatorTitles>
            </MainTitles>
          </Link>
        ))}
      </ContainerMainTitles>
      <GridArticles>
        {responseSort.map((res) => (
          <Card key={res._id}>
            <ImageCard src={res.promo_items.basic.url} />
            <CardBody>
              <DescriptionCard>
                <b>{res.headlines.basic}.</b>
                {res.promo_items.basic.subtitle}
              </DescriptionCard>
            </CardBody>
            <DateCard>{new Date(res.display_date).toLocaleString("es-ES", configDates)}</DateCard>
          </Card>
        ))}
      </GridArticles>
    </MainContainer>
  );
};

export default Main;
