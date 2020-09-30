import styled from 'styled-components'

const StyledRemoteMenuContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, .03);
  transition: width ease-out 0.5s;
  overflow: hidden;
  &.remote-menu--open {
    width: 80px;
  }
  &.remote-menu--close {
    width: 100%;
  }
`

const StyledRemoteMenuButton = styled.div`
  max-width: 80px;
  min-width: 80px;
  width: 80px;
  height: 80px;
`

const StyledRemoteMenuList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
`

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
`

export {
  StyledRemoteMenuContainer,
  StyledRemoteMenuButton,
  StyledRemoteMenuList,
  StyledRemoteMenuListItem
}
