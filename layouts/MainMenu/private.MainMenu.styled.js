import styled from "styled-components";

const StyledMenu = styled.menu`
  display: flex;
  padding: 0 32px;
  border-top: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
`;
const StyledMenuItem = styled.li`
  padding: 0 16px;

  a {
    display: block;
    padding: 16px 0;
  }

  &:hover {
    color: #fff;
    background: #000;
  }
`;

export { StyledMenu, StyledMenuItem };
