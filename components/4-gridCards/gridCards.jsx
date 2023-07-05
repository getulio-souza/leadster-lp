import React from 'react'

import {
  GridCardsContainer,
} from "@/components/4-gridCards/gridCards.styles";
import Card from '@/components/card/card'

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
    </GridCardsContainer>
  );
}

export default GridCards