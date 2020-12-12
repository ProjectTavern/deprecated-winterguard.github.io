import styled from "styled-components";

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-top: 1px solid #eaeaea;
`;

const StyledFooterLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export { StyledFooter, StyledFooterLink };
