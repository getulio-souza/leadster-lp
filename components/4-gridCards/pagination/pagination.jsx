import React from "react";
import {
  PaginationContainer,
  PaginationText,
  PaginationNumberContainer,
  PaginationNumber,
  PaginationNumberSelected,
} from "@/components/4-gridCards/pagination/pagination.styles";

function Pagination() {
  return (
    <PaginationContainer>
      <PaginationText>Página</PaginationText>
      <PaginationNumberContainer>
        <PaginationNumber>1</PaginationNumber>
        <PaginationNumber>2</PaginationNumber>
        <PaginationNumberSelected>3</PaginationNumberSelected>
        <PaginationNumber>4</PaginationNumber>
      </PaginationNumberContainer>
    </PaginationContainer>
  );
}

export default Pagination;
