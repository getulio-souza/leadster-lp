import styled from 'styled-components';

export const ModalContainer = styled.section`
  width:30%;
  height:50%;
  background-color:#fff;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  z-index:10;
  border-radius:5px;
`;

export const ModalHeader = styled.div`
  background-color:#fff;
`;

export const ModalThumb = styled.div`
  width: 100%;
  height: 100%;
  background-color:#2a2a2a;
  position:relative;
`;

export const ModalPlayBtn = styled.div`
  width:70px;
  height:70px;
  border-radius:50%;
  background-color:grey;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalCloseBtn = styled.button`
  border:none;
  background-color:transparent;
  position: absolute;
  top:10px;
  right:10px;
  font-family:inter;
  font-weight: 700;
  cursor:pointer;
  color:#ccb8b8;
`;

export const ModalTitle = styled.h4`
  padding: 20px 0px;
  text-align: center;
  width: 200px;
  margin: 0 auto;
  font-size: 13px;
`;

export const HighLightColor = styled.span`
  color: #2c83fb;
`;

export const ModalDescription = styled.div`
  background-color:#fff;
  padding:10px;
`;

export const ModalDescriptionTitle = styled.h4`
  padding-bottom:10px;
`;

export const ModalDescriptionText = styled.p`
  font-size:10px;
  padding-bottom:10px;
`;

export const ModalDownloads = styled.div`
  background-color: #fff;
  padding-left: 10px;
`;

export const ModalDownloadsTitle = styled.h4`
  padding-bottom:10px;
`;

export const ModalDownloadsFiles = styled.div`
  display:flex;
  gap:10px;
  padding-bottom:10px;
`;

export const ModalFile = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 0px 5px;
  border-radius:5px;
`;

export const ModalFileTitle = styled.p`
  font-size:8px;
  padding: 5px;
  border-radius: 5px;
`;