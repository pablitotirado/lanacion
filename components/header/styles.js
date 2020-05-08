import styled from "styled-components";

export const ContainerHeader = styled.header`
  padding: 0.9rem;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  @media (min-width: 1024px) {
    height: 4.25rem;
  }
`;

export const ContainerLeft = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 25%;
  @media (min-width: 1024px) {
    display: flex;
  }
`;
export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
`;
export const IconMenu = styled.img`
  width: 1.5rem;
  height: 2rem;
`;

export const TextMenu = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
`;

export const InputSearch = styled.input`
  padding: 0.6rem 0.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  border: 1px solid #cccccc;
  border-radius: 3px;
  width: 13rem;
`;

export const IconSearch = styled.img`
  position: absolute;
  right: 1rem;
  width: 1rem;
  height: 1rem;
`;

export const Logo = styled.img`
  width: 10.54rem;
  height: 1rem;

  @media (min-width: 1024px) {
    width: 19.2rem;
    height: 1.9rem;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 21%;
  padding-right: 2rem;
`;

export const Subscribe = styled.a`
  text-transform: uppercase;
  font-size: 0.75rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #0074c4;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#ffff24" : "#FFFFFF")};
  border: 1px solid ${(props) => (props.primary ? "#CCCCCC" : "#0074c4")};
  color: ${(props) => (props.primary ? "#000000" : "#0074c4")};
  display: none;
  padding: 0.75em 1.5em;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 3px;

  &:last-of-type {
    margin-left: 2rem;
  }

  &:hover {
    background-color: ${(props) => !props.primary && "#0074c4"};
    color: ${(props) => !props.primary && "white"};
  }

  @media (min-width: 1024px) {
    display: initial;
  }
`;
