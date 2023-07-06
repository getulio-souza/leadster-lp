import styled from 'styled-components';

export const CardContainer = styled.article`
  cursor:pointer;
`;

export const CardFooter = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 0px 0px 10px 10px;
  max-width: 200px;
`;

export const CardDescription = styled.h6`
  &:hover{
  color:#2c83fb
 }
`;

export const Image = styled.img`
 &:hover{
  opacity:0.7;
 }
`;