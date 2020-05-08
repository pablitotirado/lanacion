import React, { useContext } from "react";
// import ContextNacion from "../../context/context";
import Link from "next/link";
import {
  TitleMain,
  MainContainer,
  ContainerMainTitles,
  MainTitles,
  SeparatorTitles,
  GridArticles,
  Card,
  ImageCard,
  CardBody,
  DescriptionCard,
  DateCard,
} from "./styles";

const Main = ({ response }) => {
  // const { response } = useContext(ContextNacion);

  const responseFilter = response.filter((filt) => filt.subtype === "7");
  const responseSort = responseFilter.sort((a, b) => {
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
            <ImageCard src={res.promo_items.basic.url} alt={`image-${res.headlines.basic}`} />
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
