import React from "react";
import {
  FooterBackground,
  FooterHeader,
  FooterHeaderSubtitle,
  FooterCategoriesContainer,
  LinksContainer,
  FooterCategoryTitle,
  SingleLink,
  CasesContainer,
  MaterialsContainer,
  ContactContainer,
  FooterContactTitle,
  ContactSocial,
  SocialIconBackground,
  ContactInfo,
  ContactEmail,
  ContactTel,
  FooterBottom,
  CopyrightText,
  AddressText,
  HightlightText,
  StrongText,
} from "@/components/6-footer/footer.styles";

import Image from "next/image";
import footerLogo from "@/public/assets/icons/transparent-logo.png";
import LinkedinLogo from "@/public/assets/icons/linkedin-logo.png";
import FacebookLogo from "@/public/assets/icons/facebook-icon.png";
import InstagramLogo from "@/public/assets/icons/instagram-icon.png";

function Footer() {
  return (
    <FooterBackground>
      <FooterHeader>
        <Image src={footerLogo} width={200} alt="Leadster logo" />
        <FooterHeaderSubtitle>
          Transformando visitantes em clientes.
        </FooterHeaderSubtitle>
      </FooterHeader>
      <FooterCategoriesContainer>
        <LinksContainer>
          <FooterCategoryTitle>Links Principais</FooterCategoryTitle>
          <SingleLink>Home</SingleLink>
          <SingleLink>Ferramenta</SingleLink>
          <SingleLink>Preços</SingleLink>
          <SingleLink>Contato</SingleLink>
        </LinksContainer>
        <CasesContainer>
          <FooterCategoryTitle>Cases</FooterCategoryTitle>
          <SingleLink>Home</SingleLink>
          <SingleLink>Ferramenta</SingleLink>
          <SingleLink>Preços</SingleLink>
          <SingleLink>Contato</SingleLink>
        </CasesContainer>
        <MaterialsContainer>
          <FooterCategoryTitle>Materiais</FooterCategoryTitle>
          <SingleLink>Blog</SingleLink>
          <SingleLink>Parceria com Agências</SingleLink>
          <SingleLink>Guia Definitivo de Marketing</SingleLink>
          <SingleLink>Materiais Gratuitos</SingleLink>
        </MaterialsContainer>
        <ContactContainer>
          <FooterContactTitle>Siga a Leadster</FooterContactTitle>
          <ContactSocial>
            <SocialIconBackground>
              <Image
                src={LinkedinLogo}
                width={20}
                alt="Linkedin logo"
                style={{ filter: "invert(0.5)" }}
              />
            </SocialIconBackground>
            <SocialIconBackground>
              <Image
                src={FacebookLogo}
                width={20}
                alt="Facebook logo"
                style={{ filter: "invert(0.5)" }}
              />
            </SocialIconBackground>
            <SocialIconBackground>
              <Image
                src={InstagramLogo}
                width={20}
                alt="Instagram logo"
                style={{ filter: "invert(0.5)" }}
              />
            </SocialIconBackground>
          </ContactSocial>
          <ContactInfo>
            <ContactEmail>
              <StrongText>E-mail:</StrongText> contato@leadster.com.br
            </ContactEmail>
            <ContactTel><StrongText>telefone:</StrongText> (42) 98828-9851</ContactTel>
          </ContactInfo>
        </ContactContainer>
      </FooterCategoriesContainer>
      <FooterBottom>
        <CopyrightText>
          Copyright 2015 - 2022 Todos os direitos reservados |{" "}
          <HightlightText>Leadster</HightlightText>
        </CopyrightText>
        <AddressText>
          Rua Jose Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
          Termos de uso
        </AddressText>
      </FooterBottom>
    </FooterBackground>
  );
}

export default Footer;
