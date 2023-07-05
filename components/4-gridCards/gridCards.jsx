import React from 'react'
import Card from '@/components/card/card'
import {GridCardsContainer} from "@/components/4-gridCards/gridCards.styles";
import { GenericUnderline } from '../underline/underline.styles';

function GridCards() {
  return (
    <GridCardsContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <GenericUnderline/>
    </GridCardsContainer>
  );
}

export default GridCards