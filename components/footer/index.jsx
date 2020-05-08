import React from "react";
import {
  ContainerFooter,
  Logo,
  Social,
  IconSocial,
  ContainerStore,
  IconStore,
  ContainerTextFooter,
  TextGda,
  Copy,
} from "./styles";

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <Logo src="/static/img/lanacionlogo.png" />
        <Social>
          <IconSocial src="/static/img/facebook.svg" />
          <IconSocial src="/static/img/twitter.svg" />
          <IconSocial src="/static/img/instagram.svg" />
          <IconSocial src="/static/img/rss.svg" />
        </Social>
        <ContainerStore>
          <IconStore src="/static/img/google-play-download-android-app.svg" />
          <IconStore src="/static/img/download-on-the-app-store-apple.svg" />
        </ContainerStore>
        <ContainerTextFooter>
          <TextGda>Miembro de GDA. Grupo de Diarios América</TextGda>
          <Copy>Copyright 2019 SA LA NACION | Todos los derechos reservados</Copy>
        </ContainerTextFooter>
      </ContainerFooter>
    </>
  );
};

export default Footer;
