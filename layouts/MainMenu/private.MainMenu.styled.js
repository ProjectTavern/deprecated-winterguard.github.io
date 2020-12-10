import styled from "styled-components";

const StyledMenu = styled.menu`
  display: flex;
  position: sticky;
  top: -1px;
  padding: 0 32px;
  border-top: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
  overflow: scroll;
  background-color: #f1f2f3;
`;
const StyledMenuItem = styled.li`
  a {
    display: block;
    padding: 12px;
  }

  &:hover,
  &.on {
    color: #fff;
    background: #000;
  }
`;

export { StyledMenu, StyledMenuItem };
