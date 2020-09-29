import styled from 'styled-components'

const StyledRemoteMenuContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledRemoteMenuButton = styled.div`
  width: 80px;
  height: 80px;
`

const StyledRemoteMenuList = styled.ul`
  flex-grow: 1;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-around;
`

export {
  StyledRemoteMenuContainer,
  StyledRemoteMenuButton,
  StyledRemoteMenuList
}
