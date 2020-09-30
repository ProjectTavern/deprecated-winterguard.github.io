import { useState } from 'react'

import Link from 'next/link'
import { StyledRemoteMenuContainer, StyledRemoteMenuButton, StyledRemoteMenuList, StyledRemoteMenuListItem } from './private.RemoteMenu.styled'

const RemoteMenu = ({ indexCards }) =>{
  const [openMenuList, setOpenMenuList] = useState(true);

  const RemoteMenuList = () => (<StyledRemoteMenuList>
      <StyledRemoteMenuListItem>
        <Link href="/">Home</Link>
      </StyledRemoteMenuListItem>
      {indexCards.map(({ key, title, href }) =>
        (<StyledRemoteMenuListItem key={key}>
          <Link href={href}>{ title }</Link>
        </StyledRemoteMenuListItem>))}
    </StyledRemoteMenuList>)

  return (
    <StyledRemoteMenuContainer className={openMenuList ? 'remote-menu--open' : 'remote-menu--close'}>
    <StyledRemoteMenuButton onClick={() => setOpenMenuList(!openMenuList)}>버튼</StyledRemoteMenuButton>
    <RemoteMenuList />
  </StyledRemoteMenuContainer>)
}
export default RemoteMenu
