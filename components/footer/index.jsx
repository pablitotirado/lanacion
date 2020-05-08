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
        <Logo src="/static/img/lanacionlogo.png" alt="logo-lanacion" />
        <Social>
          <IconSocial src="/static/img/facebook.svg" alt="icon-facebook" />
          <IconSocial src="/static/img/twitter.svg" alt="icon-twitter" />
          <IconSocial src="/static/img/instagram.svg" alt="icon-instagram" />
          <IconSocial src="/static/img/rss.svg" alt="icon-rss" />
        </Social>
        <ContainerStore>
          <IconStore src="/static/img/google-play-download-android-app.svg" alt="icon-playstore" />
          <IconStore src="/static/img/download-on-the-app-store-apple.svg" alt="icon-appstore" />
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
