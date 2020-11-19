import styled from "styled-components";

const StyledRemoteMenuContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width ease-out 0.25s;
  width: 240px;
  border: 1px solid #000;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.07);
  &.remote-menu-list--open {
    max-height: 500px;
    overflow-y: scroll;
  }
  &.remote-menu-list--close {
    height: 1.5rem;
  }
  &.remote-menu--open {
    
  }
  &.remote-menu--close {
    width: 65px;
  }
`;

const StyledRemoteMenuButtonContainer = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  height: 1.5rem;
  text-align: center;
  border-bottom: 1px solid #000;
`;

const StyledRemoteMenuControlButton = styled.button`
  font-size: 0;
  height: 100%;
  background-color: red;
`

const StyledRemoteMenuButton = styled.button`
  flex-grow: 1;
`

const StyledRemoteMenuList = styled.ul`
  width: 100%;
`;

const StyledRemoteMenuListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: rgab(125, 234, 57, 0.5);
  &:hover {
    background: rgba(125, 234, 57, 0.3);
  }
  a {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
  }
`;

export {
  StyledRemoteMenuContainer,
  StyledRemoteMenuButtonContainer,
  StyledRemoteMenuControlButton,
  StyledRemoteMenuButton,
  StyledRemoteMenuList,
  StyledRemoteMenuListItem,
};
