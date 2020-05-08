import styled from "styled-components";

export const ContainerNav = styled.div`
  padding: 0.3rem;
  border-top: 1px solid #d9d9d9;
  position: fixed;
  width: 100%;
  bottom: 0;
  background: white;
  display: flex;
  justify-content: space-around;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const TitleIcon = styled.p`
  font-size: 0.7rem;
  margin: 0.3rem;
`;
