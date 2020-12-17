import styled from "styled-components";

const StyledContainer = styled.article`
  display: grid;
  grid-template-areas:
    "header"
    "menu"
    "main"
    "footer";
  grid-template-rows: 88px 42px auto 48px;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

export { StyledContainer };
