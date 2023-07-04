import React from 'react';

import {
  FilterContainer,
  CategoryContainer,
  SingleCategory,
  SingleCategorySelected,
  DropdownFilter,
  DropDownFilterTitle,
  DropDownOptions,
  DropdownOption,
} from "../3-BarFilter/bar.styles";

function Bar() {
  return (
    <FilterContainer>
      <CategoryContainer>
        <SingleCategory>Agências</SingleCategory>
        <SingleCategory>Chatbot</SingleCategory>
        <SingleCategory>Marketing Digital</SingleCategory>
        <SingleCategorySelected>Geração de Leads</SingleCategorySelected>
        <SingleCategory>Mídia Paga</SingleCategory>
      </CategoryContainer>

      {/* dropdown */}
      <DropdownFilter>
        <DropDownFilterTitle>Ordenar por</DropDownFilterTitle>
        <DropDownOptions>
          <DropdownOption>Data de publicação</DropdownOption>
          <DropdownOption>Mais antigo</DropdownOption>
          <DropdownOption>Mais relevante</DropdownOption>
        </DropDownOptions>
      </DropdownFilter>
    </FilterContainer>
  );
}

export default Bar