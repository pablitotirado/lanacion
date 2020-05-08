import styled from "styled-components";

export const ContainerFooter = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
`;
export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 15rem;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #d9d9d9;
  padding-top: 1.5rem;
`;
export const IconSocial = styled.img`
  width: 1.5rem;
`;
export const ContainerStore = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-evenly;
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
