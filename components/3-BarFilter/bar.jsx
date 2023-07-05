import React, { useState } from "react";

import {
  FilterBackground,
  FilterContainer,
  FilterContainerUnderline,
  CategoryContainer,
  SingleCategory,
  SingleCategorySelected,
  DropdownFilter,
  DropDownFilterTitle,
  DropDownOptions,
  DropdownOption,
} from "../3-BarFilter/bar.styles";

function Bar() {
  const [value, setValue] = useState("Data da Publicação");

  return (
    <FilterBackground>
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
          <DropDownOptions
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <DropdownOption defaultValue="data">
              Data de publicação
            </DropdownOption>
            <DropdownOption value="Ordem crescente">
              Ordem crescente
            </DropdownOption>
            <DropdownOption value="Ordem decrescente">
              Ordem decrescente
            </DropdownOption>
          </DropDownOptions>
        </DropdownFilter>
      </FilterContainer>
        <FilterContainerUnderline></FilterContainerUnderline>
    </FilterBackground>
  );
}

export default Bar;
