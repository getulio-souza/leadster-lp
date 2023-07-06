import React, { useState } from 'react'
import Card from '@/components/4-gridCards/card/card'
import {GridCardsContainer} from "@/components/4-gridCards/gridCards.styles";
import { GenericUnderline } from '../underline/underline.styles';
import VideoModal from '@/components/4-gridCards/videoModal/videoModal'

function GridCards() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <GridCardsContainer>
      <Card
        onClick={() => {
        setOpenModal(true)
      }}
      />
      {openModal && <VideoModal closeModal={setOpenModal}/>}
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