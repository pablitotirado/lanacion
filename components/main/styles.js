import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  width: 100%;
  @media (min-width: 1024px) {
    width: 70%;
    padding-left: 2rem;
  }
`;
export const TitleMain = styled.h1`
  width: max-content;
  font-size: 1.8rem;
  font-weight: 500;
  font-family: Georgia, "Times New Roman", Times, serif;
  border-bottom: 3px solid black;
  margin-left: 1rem;
`;
export const ContainerMainTitles = styled.div`
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;
  margin-left: 0.5rem;
  @media (min-width: 768px) {
    overflow: initial;
    width: 95%;
  }
`;
export const MainTitles = styled.a`
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
export const SeparatorTitles = styled.div`
  font-size: 2rem;
  margin-top: 0.3rem;
  margin: 0 0.5rem;
`;
export const GridArticles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const Card = styled.article`
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 45%;
    justify-content: space-around;
  }
  @media (min-width: 1024px) {
    flex-basis: 30%;
  }
`;
export const ImageCard = styled.img`
  width: 100%;
  height: 177px;
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DescriptionCard = styled.a`
  font-family:  font-family: Georgia, "Times New Roman", Times, serif;
  cursor: pointer;
`;
export const DateCard = styled.p`
  color: #5a5a5a;
  font-size: 0.8rem;
  text-transform: capitalize;
`;
