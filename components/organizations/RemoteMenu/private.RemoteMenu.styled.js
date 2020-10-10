import Link from "next/link";
import styled from "styled-components";

const StyledRemoteMenuLink = styled(Link)`
  display: block;
  height: 100%;
`;

const StyledRemoteMenuContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: width ease-out 0.25s;
  overflow: hidden;
  &.remote-menu--open {
    width: 32px;
    height: 32px;
  }
  &.remote-menu--close {
    width: 100%;
  }
`;

const StyledRemoteMenuButton = styled.div`
  max-width: 32px;
  min-width: 32px;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border: 1px solid #000;
`;

const StyledRemoteMenuList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
`;

const StyledRemoteMenuListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgab(125, 234, 57, 0.5);
  &:hover {
    background: rgba(125, 234, 57, 0.3);
  }
`;

export {
  StyledRemoteMenuContainer,
  StyledRemoteMenuButton,
  StyledRemoteMenuList,
  StyledRemoteMenuListItem,
  StyledRemoteMenuLink,
};
