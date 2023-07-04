import styled from 'styled-components'

export const FilterContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding-top:70px;
`;

export const CategoryContainer = styled.article`
  display: flex;
  gap: 10px;
`;

export const SingleCategory = styled.div`
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 13px;
  cursor:pointer;
  transition:.3s;
  &:hover{
    color:#2c83fb;
    border: 1px solid #2c83fb;
  }
`;

export const SingleCategorySelected = styled.div`
  background-color: #2c83fb;
  color:#fff;
  border: 1px solid #2c83fb;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 13px;
  cursor:pointer;
  transition:.3s;
  &:hover{
    background-color:#fff;
    color:#2c83fb;
    border: 1px solid #2c83fb;
  }
`;

export const DropdownFilter = styled.div`
  display: flex;
  align-items:center;
  gap:10px;
`;
export const DropDownFilterTitle = styled.h5``;
export const DropDownOptions = styled.select``;
export const DropdownOption = styled.div``;