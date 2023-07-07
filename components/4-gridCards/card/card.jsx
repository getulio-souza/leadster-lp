import Image from 'next/image'
import {useState} from 'react'
import card from '@/public/assets/images/thumbnail.png'
import {
  CardContainer,
  CardFooter,
  CardDescription,
} from "@/components/4-gridCards/card/card.styles";

import Modal from '../modal/modal';

function Card() {

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  }

  const handleModalClose = () => {
    setModalOpen(false);
  }

  return (
    <CardContainer onClick={handleModalOpen}>
      <Modal isOpen={modalOpen} onClose={handleModalClose}></Modal>
      <Image
        src={card}
        width={200}
        alt="video de divulgacao"
        style={{ borderRadius: "10px 10px 0px 0px" }}
      />
      <CardFooter>
        <CardDescription>
          Como aumentar sua Geração de Leads feat. Traktor
        </CardDescription>
      </CardFooter>
    </CardContainer>
  );
}

export default Card