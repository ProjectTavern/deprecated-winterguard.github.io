import styled from "styled-components";

const StyledDevelopments = styled.section`
  width: 100%;
`;

const StyledDevelopmentsList = styled.ul`
  display: grid;
  min-height: 440px;
`;

const StyledDevelopmentsCard = styled.li`
  flex-direction: column;
  border: 1px solid #e6e6e6;
  flex: 1 auto;
  margin: 4px;
  min-height: 240px;

  &:nth-child(1) {
    grid-column: 1 / span 3;
    grid-row: 1 / span 2;
  }

  &:nth-child(2) {
    grid-column: 4 / span 2;
    grid-row: 1 / span 1;
  }

  &:nth-child(3) {
    grid-column: 6 / span 2;
    grid-row: 1 / span 1;
  }

  &:nth-child(4) {
    grid-column: 4 / span 2;
    grid-row: 2 / span 1;
  }

  &:nth-child(5) {
    grid-column: 6 / span 2;
    grid-row: 2 / span 1;
  }

  .development_card_image__wrapper {
    display: flex;
    height: 64%;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }
`;

export { StyledDevelopments, StyledDevelopmentsList, StyledDevelopmentsCard };
