import React from 'react'
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalVideo,
  ModalDescription,
  ModalDescriptionTitle,
  ModalDescriptionText,
  ModalDownloads,
  ModalDownloadsTitle,
  ModalDownloadsFiles,
  ModalFile,
} from "@/components/4-gridCards/videoModal/videoModal";

function VideoModal() {
  return (
    <ModalContainer>
      <ModalHeader>
        <ModalTitle>
          Webminar: Como aumentar sua geração de Leads feat. Traktor
        </ModalTitle>
      </ModalHeader>
      <ModalVideo></ModalVideo>
      {/* description */}
      <ModalDescription>
        <ModalDescriptionTitle>Descrição</ModalDescriptionTitle>
        <ModalDescriptionText></ModalDescriptionText>
      </ModalDescription>
      {/* downloads */}
      <ModalDownloads>
        <ModalDownloadsTitle>Downloads</ModalDownloadsTitle>
        <ModalDownloadsFiles>
          <ModalFile></ModalFile>
          <ModalFile></ModalFile>
          <ModalFile></ModalFile>
        </ModalDownloadsFiles>
      </ModalDownloads>
    </ModalContainer>
  );
}

export default VideoModal