import React from 'react';
import {
  HeaderBackground,
  HeaderContainer,
  HeaderLabel,
  HeaderSubtitle,
  HeaderTitle,
  HeaderTitleUnderline,
  HeaderDescription,
  HighLightText,
} from "../2-header/header.styles";


function Header() {
  return (
    <HeaderBackground>
      <HeaderContainer>
        <HeaderLabel>Webinars exclusivos</HeaderLabel>
        <HeaderSubtitle>Menos Conversinha,</HeaderSubtitle>
        <HeaderTitle>Mais Conversão</HeaderTitle>
        <HeaderTitleUnderline></HeaderTitleUnderline>
        <HeaderDescription>
          Conheça as estratégias que <HighLightText>mudaram o jogo</HighLightText> e como
          aplicá-las no seu negócio
        </HeaderDescription>
      </HeaderContainer>
    </HeaderBackground>
  );
}

export default Header