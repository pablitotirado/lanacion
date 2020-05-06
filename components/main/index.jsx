import React, { useContext } from "react";
import ContextNacion from "../../context/context";
import Link from "next/link";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  @media (min-width: 768px) {
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
`;
const ContainerMainTitles = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;
const MainTitles = styled.a`
  font-size: 14px;
  color: #0074c4;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

const SeparatorTitles = styled.div`
  font-size: 2rem;
  margin-top: 0.3rem;
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

  console.log(response);

  const titles = response.slice(0, 9);
  return (
    <MainContainer>
      <TitleMain>Acumulado Grilla</TitleMain>
      <ContainerMainTitles>
        {titles.slice(0, 9).map((res, i) => (
          <MainTitles key={res._id}>
            {res.headlines.basic} <SeparatorTitles>·</SeparatorTitles>
          </MainTitles>
        ))}
      </ContainerMainTitles>
      <GridArticles>
        {response.map((res) => (
          <Card key={res._id}>
            <ImageCard src={res.promo_items.basic.url} />
            <CardBody>
              <Link href="/">
                <DescriptionCard>
                  <b>{res.headlines.basic}.</b>
                  {res.promo_items.basic.subtitle}
                </DescriptionCard>
              </Link>
            </CardBody>
            <DateCard>{res.display_date}</DateCard>
          </Card>
        ))}
      </GridArticles>
    </MainContainer>
  );
};

export default Main;
