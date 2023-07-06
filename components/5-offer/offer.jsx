import React from 'react'
import {
  OfferBackground,
  OfferMessageContainer,
  OfferMessage,
  OfferMessageTitle,
  OfferMessageSubtitle,
  OfferBtnAndText,
  Offerbtn,
  OfferText,
  OfferAlertMessageBox,
  OfferAlertMessage,
  OfferAlertMessageText,
  OfferRating,
  OfferRatingText,
  PipeDivider,
  StrongerText,
} from "@/components/5-offer/offer.styles";
import { GenericUnderline } from '../underline/underline.styles'
import Image from 'next/image'

import graphic from '@/public/assets/images/comparativo_img_CTA.png'
import rdStationLogo from '@/public/assets/images/selo_RD.png'
import ratingStars from '@/public/assets/images/rating.webp'
import noCreditCard from '@/public/assets/icons/no-card-dark.webp'

function Offer() {
  return (
    <OfferBackground>
      <Image src={graphic} width={300} alt="grafico comparativo de leads" />
      <OfferMessageContainer>
        <OfferMessage>
          <OfferMessageTitle>
            Pronto para triplicar sua <StrongerText>Geração de Leads?</StrongerText>
          </OfferMessageTitle>
          <OfferMessageSubtitle>
            Criação e ativação em <StrongerText>4 minutos</StrongerText>
          </OfferMessageSubtitle>
          <GenericUnderline style={{ width: "100%" }} />
        </OfferMessage>

        <OfferBtnAndText>
          <Offerbtn>Ver demonstração</Offerbtn>
          <OfferText>
            <Image src={rdStationLogo} width={100} alt="logo da rd station" />
          </OfferText>
        </OfferBtnAndText>

        <OfferAlertMessageBox>
          <OfferAlertMessage>
            <Image
              src={noCreditCard}
              width={10}
              alt="cartão de crédito não obrigatório"
            />
            <OfferAlertMessageText>
              <StrongerText>Não</StrongerText> é necessário Cartão de Crédito
            </OfferAlertMessageText>
          </OfferAlertMessage>
          <PipeDivider>|</PipeDivider>
          <OfferRating>
            <Image src={ratingStars} width={60} alt="rating stars" />
            <OfferRatingText>
              <StrongerText>4.9</StrongerText>/5 média de satisfação
            </OfferRatingText>
          </OfferRating>
        </OfferAlertMessageBox>
      </OfferMessageContainer>
    </OfferBackground>
  );
}

export default Offer