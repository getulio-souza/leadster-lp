import React from "react";
import { ReactDOM } from "react";
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
} from "../modal/modal.styles";

const Modal = ({ onClose, children, title }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
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

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default Modal