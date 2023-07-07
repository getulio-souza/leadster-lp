import styled from 'styled-components';

export const ModalContainer = styled.section`
  width:35%;
  height:50%;
  background-color:#fff;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  z-index:10;
  border-radius:5px;
  @media (max-width:900px){
    width:80%;
    height:50%;
  }
`;

export const ModalHeader = styled.div`
  background-color:#fff;
`;

export const ModalThumb = styled.div`
  width: 100%;
  height: 100%;
  background-color:#2a2a2a;
  position:relative;
  @media (max-width:900px){
    width:100%;
    height:50%;
  }
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

export const VideoStatusLine = styled.div`
  position:absolute;
  bottom: 30px;
  background-color:#fff;
  width:100%;
  height:1px;
`;

export const VideoStatus = styled.div`
  background-color:red;
  width:20%;
  height:1px;
`;

export const VideoControls = styled.div`
  display:flex;
`;

export const PlayButtons = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  display:flex;
  gap:10px;
`;

export const ConfigButtons = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  display:flex;
  gap:10px;
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