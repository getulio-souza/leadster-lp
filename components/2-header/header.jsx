import React from 'react';
import {
  HeaderBackground,
  HeaderContainer,
  HeaderLabel,
  HeaderSubtitle,
  HeaderTitle,
  HeaderDescription,
  HighLightText,
} from "../2-header/header.styles";

import GenericUnderline from '@/components/underline/underline'

function Header() {
  return (
    <HeaderBackground>
      <HeaderContainer>
        <HeaderLabel>Webinars exclusivos</HeaderLabel>
        <HeaderSubtitle>Menos Conversinha,</HeaderSubtitle>
        <HeaderTitle>Mais Conversão</HeaderTitle>
        <GenericUnderline/>
        <HeaderDescription>
          Conheça as estratégias que <HighLightText>mudaram o jogo</HighLightText> e como
          aplicá-las no seu negócio
        </HeaderDescription>
      </HeaderContainer>
    </HeaderBackground>
  );
}

export default Header