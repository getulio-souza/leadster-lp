import styled from 'styled-components';

export const PaginationContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const PaginationText = styled.p`
  font-size:14px;
  font-weight:700;
  color:#2a2a2a;
  padding-right:5px;
`;

export const PaginationNumberContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items:center;
`;

export const PaginationNumber = styled.p`
  cursor:pointer;
`;

export const PaginationNumberSelected = styled.p`
  border:1px solid #2c83fb;
  color:#2c83fb;
  font-weight:700;
  padding:4px 7px;
  border-radius:5px;
  cursor:pointer;
`;



