import styled from "styled-components";

const StyledContainer = styled.article`
  display: grid;
  grid-template-areas:
    "date . ."
    "header header header"
    "menu menu menu"
    "main main main"
    "footer footer footer";
  grid-template-rows: 8px 88px 42px auto 48px;
  min-height: 100vh;
`;

export { StyledContainer };
