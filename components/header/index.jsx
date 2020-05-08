import React from "react";
import Link from "next/link";

//Styles
import {
  ContainerHeader,
  Logo,
  Subscribe,
  Button,
  ContainerLeft,
  InputSearch,
  ContainerRight,
  IconSearch,
  ContainerMenu,
  IconMenu,
  TextMenu,
} from "./styles";

const Header = () => {
  return (
    <>
      <ContainerHeader>
        <ContainerLeft>
          <ContainerMenu>
            <IconMenu src="/static/img/icon-menu.svg" alt="icon-menu" />
            <TextMenu>menú</TextMenu>
          </ContainerMenu>
          <InputSearch type="text" placeholder="Buscar" />
          <IconSearch src="/static/img/icon-search.svg" alt="icon-search" />
        </ContainerLeft>
        <Logo src="/static/img/lanacionlogo.png" alt="logo-lanacion" />
        <ContainerRight>
          <Link href="/">
            <Subscribe>suscribite</Subscribe>
          </Link>
          <Button primary>suscribite</Button>
          <Button>Ingresar</Button>
        </ContainerRight>
      </ContainerHeader>
    </>
  );
};

export default Header;
