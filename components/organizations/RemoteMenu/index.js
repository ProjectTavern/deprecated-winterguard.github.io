import { useState } from 'react'

import Link from 'next/link'
import { StyledRemoteMenuContainer, StyledRemoteMenuButton, StyledRemoteMenuList } from './private.RemoteMenu.styled'

const RemoteMenu = ({ indexCards }) =>{
  const [openMenuList, setOpenMenuList] = useState(true);

  const RemoteMenuList = () => (openMenuList &&
    (<StyledRemoteMenuList>
      <li>
        <Link href="/">Home</Link>
      </li>
      {indexCards.map(({ key, title, href }) =>
        (<li key={key}>
          <Link href={href}>{ title }</Link>
        </li>))}
    </StyledRemoteMenuList>))

  return (
    <StyledRemoteMenuContainer>
    <StyledRemoteMenuButton onClick={() => setOpenMenuList(!openMenuList)}>버튼</StyledRemoteMenuButton>
    <RemoteMenuList />
  </StyledRemoteMenuContainer>)
}
export default RemoteMenu
