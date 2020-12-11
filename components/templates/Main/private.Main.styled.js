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
`;

const StyledMainCard = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  border: 1px solid #e6e6e6;
  margin: 4px;
  min-height: 240px;

  &:nth-child(1) {
    grid-column: 1 / span 3;
    grid-row: 1 / span 2;

    .main_card_image__wrapper {
      padding-top: 100%;
      flex: 1 1;
    }
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

  .main_card_image__wrapper {
    flex: 1 1;
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .main_card_story {
    padding: 16px;
    border-top: 1px solid #e6e6e6;

    .main_card_category {
      font-size: 1rem;
      margin-bottom: 16px;
    }

    .main_card_title {
      font-size: 1.2rem;
      letter-spacing: -0.5px;
    }
  }
`;

export { StyledMain, StyledMainList, StyledMainCard };
