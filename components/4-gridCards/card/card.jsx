import Image from 'next/image'
import React from 'react'
import card from '@/public/assets/images/thumbnail.png'
import {
  CardContainer,
  CardFooter,
  CardDescription,
} from "@/components/card/card.styles";

function Card() {
  return (
    <CardContainer>
      <Image
        src={card}
        width={200}
        alt='video de divulgacao'
        style={{borderRadius: '10px 10px 0px 0px'}}
      />
      <CardFooter>
        <CardDescription>Como aumentar sua Geração de Leads feat. Traktor</CardDescription>
      </CardFooter>
    </CardContainer>
  )
}

export default Card