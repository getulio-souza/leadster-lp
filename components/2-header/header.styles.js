import styled from 'styled-components'

export const HeaderBackground = styled.article`
  background-color:#f6f9ff;
  min-height: 20rem;
  position:relative;
`;

export const HeaderContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:5px;
  width:430px;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%)
`;

export const HeaderLabel = styled.h6`
  color: #2c83fb;
  border: 2px solid #2c83fb;
  padding:10px;
  border-radius: 10px 10px 10px 0px;
  text-transform: uppercase;
  padding-bottom:10px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-bottom:10px;
`;
  
export const HeaderSubtitle = styled.h3`
  color: #505269;
  font-weight: 500;
  font-size: 30px;

  @media (max-width:900px){
    font-size:20px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size:50px;
  color:#2c83fb;

  @media (max-width:900px){
    font-size:40px;
  }
`;

export const HeaderDescription = styled.p`
  text-align:center;
  font-size: 12px;
  @media (max-width:900px){
    max-width:300px;
  }
`;

export const HighLightText = styled.span`
  color:#2f2c2c;
  font-weight:700;
`;