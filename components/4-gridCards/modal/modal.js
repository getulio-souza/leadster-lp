import React from "react";
import {
  ModalContainer,
  ModalHeader,
  ModalThumb,
  ModalPlayBtn,
  VideoStatusLine,
  VideoStatus,
  VideoControls,
  PlayButtons,
  ConfigButtons,
  ModalCloseBtn,
  ModalTitle,
  HighLightColor,
  ModalDescription,
  ModalDescriptionTitle,
  ModalDescriptionText,
  ModalDownloads,
  ModalDownloadsTitle,
  ModalDownloadsFiles,
  ModalFile,
  ModalFileTitle,
} from "../modal/modal.styles";
import "../../../styles/globals.css"
import Image from "next/image";
import downloadIcon from "@/public/assets/icons/cloud-download-icon.png";

import playButton from '@/public/assets/icons/play-arrow.png'
import previous from '@/public/assets/icons/previous.png'
import play from '@/public/assets/icons/right-arrow.png'

import gear from '@/public/assets/icons/gear.png'
import rectangle from '@/public/assets/icons/rectangular-shape.png'
import select from '@/public/assets/icons/select.png'

const Modal = ({ isOpen, onClose }) => {

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalHeader>
        <ModalCloseBtn onClick={onClose}>X</ModalCloseBtn>
        <ModalTitle>
          <HighLightColor>Webninar:</HighLightColor> Como aumentar sua geração de Leads feat. Traktor
        </ModalTitle>
      </ModalHeader>
      <ModalThumb>
        <ModalPlayBtn>
          <Image
            src={playButton}
            width={50}
            alt=""
            className="modal-play-btn"
          />
        </ModalPlayBtn>
        
        {/* video controls */}
        <VideoControls>
          {/* play buttons */}
            <PlayButtons>
              <Image
                src={previous}
                width={12}
                alt=""
                className="prev-btn"
              />
              <Image
                src={play}
                width={12}
                alt=""
                className="play-btn"
              />
              <Image
                src={previous}
                width={12}
                alt=""
                className="next-btn"
              />
          </PlayButtons>
          {/* config */}
            <ConfigButtons>
              <Image
                src={gear}
                width={15}
                alt=""
                className="next-btn"
              />
              <Image
                src={rectangle}
                width={15}
                alt=""
                className="next-btn"
              />
              <Image
                src={select}
                width={15}
                alt=""
                className="next-btn"
              />
            </ConfigButtons>
        </VideoControls>
        {/* video status */}
        <VideoStatusLine>
          <VideoStatus></VideoStatus>
        </VideoStatusLine>
      </ModalThumb>
      {/* description */}
      <ModalDescription>
        <ModalDescriptionTitle>Descrição</ModalDescriptionTitle>
        <ModalDescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ModalDescriptionText>
      </ModalDescription>
      {/* downloads */}
      <ModalDownloads>
        <ModalDownloadsTitle>Downloads</ModalDownloadsTitle>
        <ModalDownloadsFiles>
          <ModalFile style={{ backgroundColor: "#98f398", color: "#338b33" }}>
            <Image
              src={downloadIcon}
              width={10}
              alt=""
              style={{ color: "#338b33" }}
            />
            <ModalFileTitle>SpreadSheet.xls</ModalFileTitle>
          </ModalFile>
          <ModalFile style={{ backgroundColor: "#b4c7ff", color: "#4f6bff" }}>
            <Image
              src={downloadIcon}
              width={10}
              alt=""
              style={{ color: "#4f6bff" }}
            />
            <ModalFileTitle>Document.doc</ModalFileTitle>
          </ModalFile>
          <ModalFile style={{ backgroundColor: "#eeeec2", color: "#787807" }}>
            <Image
              src={downloadIcon}
              width={10}
              alt=""
              style={{ color: "#787807" }}
            />
            <ModalFileTitle>Presentation.ppt</ModalFileTitle>
          </ModalFile>
        </ModalDownloadsFiles>
      </ModalDownloads>
    </ModalContainer>
  );
};

export default Modal;
