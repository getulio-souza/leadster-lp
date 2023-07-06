import styled from 'styled-components';

export const OfferBackground = styled.section`
  background-color: #f6f9ff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 40px;
  margin-top: 40px;
  align-items: center;
`;

export const OfferMessageContainer = styled.article``;
export const OfferMessage = styled.div``;

export const OfferMessageTitle = styled.h2`
  max-width: 300px;
  min-width: 300px;
  padding-bottom:5px;
  font-weight:500;
  @media (max-width:900px){
    margin:0 auto;
  }
`;

export const OfferMessageSubtitle = styled.h5`
  font-weight:500;
  @media (max-width:900px){
    text-align:center;
  }
`;

export const OfferBtnAndText = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  padding-bottom:5px;
  
  @media (max-width:900px){
    justify-content:center;
    flex-direction: column;
    align-items: center;
  }
`;

export const Offerbtn = styled.button`
  border: none;
  width:135px;
  height: 35px;
  border-radius: 20px;
  background-color: #2c83fb;
  color: #fff;
  text-transform: uppercase;
  font-size: 8px;
  font-weight: 600;
  cursor:pointer;
  transition:.3s;
  &:hover{
    opacity:0.8
  }
`;

export const OfferText = styled.div``;

export const OfferAlertMessageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width:900px){
    flex-wrap: wrap;
    justify-content:center;
  }
`;

export const OfferAlertMessage = styled.div`
  display: flex;
  align-items: center;
`;

export const OfferAlertMessageText = styled.p`
  font-size:10px;
  padding-left:5px;
`;

export const OfferRating = styled.div`
  display:flex;
  gap:10px;
`;

export const OfferRatingText = styled.p`
  font-size:10px;
`;

export const PipeDivider = styled.div``;

export const StrongerText = styled.span`
  font-weight:700;
  color:#2a2a2a;
`;