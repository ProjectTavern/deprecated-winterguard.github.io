import Link from 'next/link'
import { StyledRemoteMenuList } from './private.RemoteMenu.styled'

const RemoteMenu = ({ indexCards }) =>
  (<StyledRemoteMenuList>
    <li>
      <Link href="/">Home</Link>
    </li>
    {indexCards.map(({ key, title, href }) =>
      (<li key={key}>
        <Link href={href}>{ title }</Link>
      </li>))}
  </StyledRemoteMenuList>)

export default RemoteMenu
