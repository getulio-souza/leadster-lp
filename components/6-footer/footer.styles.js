import styled from 'styled-components';

export const FooterBackground = styled.section`
  background-color:#fff;
`;

export const FooterHeader = styled.div`
  text-align: center;
  padding: 40px 0px;
`;

export const FooterHeaderSubtitle = styled.p`
  font-size: 10px;
  color: #757272;
  font-weight: 500;
  padding-top: 5px;
`;

export const FooterCategoriesContainer = styled.article`
  display:flex;
  justify-content:space-evenly;
  @media (max-width:900px){
    flex-direction:column;
    align-items:center;
  }
`;

export const LinksContainer = styled.div`
  @media (max-width:900px){
    text-align:center;
    padding-bottom: 20px;
  }
`;

export const FooterCategoryTitle = styled.h4`
  padding-bottom:30px;
  color:#5b5757;
`;

export const CasesContainer = styled.ul`
@media (max-width:900px){
  text-align:center;
  padding-bottom: 20px;
}`;

export const MaterialsContainer = styled.ul`
@media (max-width:900px){
  text-align:center;
  padding-bottom: 20px;
}`;

export const ContactContainer = styled.ul`
@media (max-width:900px){
  text-align:center;
  padding-bottom: 20px;
}
`;

export const FooterContactTitle = styled.h4`
  color:#5b5757;
  padding-bottom:20px;
`;

export const SingleLink = styled.li`
  list-style-type:none;
  font-size:13px;
  color: #9b9b9b;
  line-height:25px;
  cursor:pointer;
  transition:.3s;
  &:hover{
    opacity:0.8;
  }
  `;

export const ContactSocial = styled.article`
  display:flex;
  gap:10px;
  padding-bottom:10px;
  @media (max-width:900px){
    justify-content: center;
  }
`;

export const SocialIconBackground = styled.div`
  background-color:#ece6e6;
  width:30px;
  height:30px;
  border-radius:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#000;
  cursor:pointer;
  transition:.3s;
  &:hover{
    opacity:0.8;
  }
`;

export const ContactInfo = styled.article`
@media (max-width:900px){
    justify-content:center;
  }
`;

export const ContactEmail = styled.h6`
  color:#9b9b9b;
  line-height:25px;

`;

export const ContactTel = styled.h6`
  color:#9b9b9b;
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  padding: 40px 0px;
  gap: 20px;
  
`;

export const CopyrightText = styled.p`
  font-size:10px;
  color: #9b9b9b;
  @media (max-width:900px){
    max-width: 300px;
    text-align: center;
    padding: 0px 20px;
  }
`;

export const AddressText = styled.p`
  color: #9b9b9b;
  font-size:10px;

  @media (max-width:900px){
    max-width: 300px;
    text-align: center;
    padding: 0px 20px;
  }
`;

export const HightlightText = styled.span`
  color: #2c83fb;
`;

export const StrongText = styled.span`
  color:#757171;
`;
