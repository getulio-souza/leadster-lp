import React, { useState } from 'react'
import Card from '@/components/4-gridCards/card/card'
import { GridCardsContainer, Cards } from "../4-gridCards/gridCards.styles";
import { GenericUnderline } from '../underline/underline.styles';
import VideoModal from '@/components/4-gridCards/videoModal/videoModal'
import Pagination from '@/components/4-gridCards/pagination/pagination'

function GridCards() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <Cards>
      <GridCardsContainer>
        <Card
          onClick={() => {
            setOpenModal(true);
          }}
        />
        {openModal && <VideoModal closeModal={setOpenModal} />}
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