import React from "react";
import styled from "styled-components";
import { ContainerNav, ContainerIcon, Icon, TitleIcon } from "./styles";

const NavMobile = () => {
  return (
    <ContainerNav>
      <ContainerIcon>
        <Icon src="/static/img/home-icon.svg" />
        <TitleIcon>Home</TitleIcon>
      </ContainerIcon>
      <ContainerIcon>
        <Icon src="/static/img/wallet-icon.svg" />
        <TitleIcon>Club LA NACION</TitleIcon>
      </ContainerIcon>
      <ContainerIcon>
        <Icon src="/static/img/message-icon.svg" />
        <TitleIcon>Mi cuenta</TitleIcon>
      </ContainerIcon>
      <ContainerIcon>
        <Icon src="/static/img/icon-menu.svg" />
        <TitleIcon>Menú</TitleIcon>
      </ContainerIcon>
    </ContainerNav>
  );
};

export default NavMobile;
