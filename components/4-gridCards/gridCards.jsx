import { useState } from 'react'
import Card from '@/components/4-gridCards/card/card'
import { GridCardsContainer, Cards } from "../4-gridCards/gridCards.styles";
import { GenericUnderline } from '../underline/underline.styles';
import Pagination from '@/components/4-gridCards/pagination/pagination'
import Modal from "@/components/4-gridCards/modal/modal"

function GridCards() {

  return (
    <Cards>
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
      <GenericUnderline />
      <Pagination />
    </Cards>
  );
}

export default GridCards