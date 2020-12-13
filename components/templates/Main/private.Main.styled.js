import styled from "styled-components";

const StyledMain = styled.section`
  width: 100%;

  h2 {
    font-size: 2rem;
    letter-spacing: -1px;
    margin: 4px;
  }
`;

const StyledMainList = styled.ul`
  display: grid;
  min-height: 440px;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const StyledMainListItem = styled.li`
  padding: 4px;

  &:nth-child(1) {
    grid-column: 1 / span 4;
    grid-row: 1 / span 2;
  }

  &:nth-child(2) {
    grid-column: 5 / span 2;
    grid-row: 1 / span 1;
  }

  &:nth-child(3) {
    grid-column: 7 / span 2;
    grid-row: 1 / span 1;
  }

  &:nth-child(4) {
    grid-column: 9 / span 2;
    grid-row: 1 / span 1;
  }

  &:nth-child(5) {
    grid-column: 5 / span 2;
    grid-row: 2 / span 1;
  }

  &:nth-child(6) {
    grid-column: 7 / span 2;
    grid-row: 2 / span 1;
  }

  &:nth-child(7) {
    grid-column: 9 / span 2;
    grid-row: 2 / span 1;
  }
`;

export { StyledMain, StyledMainList, StyledMainListItem };
