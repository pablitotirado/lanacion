import styled from "styled-components";

export const ContainerFooter = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 1024px) {
    height: 30vh;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 1024px) {
    border-bottom: 1px solid #d9d9d9;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 15rem;
  flex-basis: 30%;
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 30%;
  padding: 1rem 0;
  border-top: 1px solid #d9d9d9;
  @media (min-width: 1024px) {
    border: none;
    order: -1;
  }
`;
export const ContainerStore = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-basis: 30%;
`;
export const IconSocial = styled.img`
  width: 1.5rem;
`;

export const IconStore = styled.img`
  width: 7.5rem;
`;

export const ContainerTextFooter = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const TextGda = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: #5a5a5a;
`;

export const Copy = styled.p`
  font-size: 0.9rem;
  color: #5a5a5a;
  text-align: center;
`;
