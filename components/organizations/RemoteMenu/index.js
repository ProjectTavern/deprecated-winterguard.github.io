import { useState, useRef, useCallback } from "react";

import Link from "next/link";
import {
  StyledRemoteMenuContainer,
  StyledRemoteMenuButtonContainer,
  StyledRemoteMenuControlButton,
  StyledRemoteMenuButton,
  StyledRemoteMenuList,
  StyledRemoteMenuListItem,
} from "./private.RemoteMenu.styled";

const RemoteMenuList = ({ indexCards }) => (
  <StyledRemoteMenuList>
    <StyledRemoteMenuListItem>
      <Link href="/">Home</Link>
    </StyledRemoteMenuListItem>
    {indexCards.map(({ key, title, href }) => (
      <StyledRemoteMenuListItem key={key}>
        <Link href={href}>{title}</Link>
      </StyledRemoteMenuListItem>
    ))}
  </StyledRemoteMenuList>
);

const RemoteMenuMoveButton = (props) => {
  // UI 상태의 값이 아니므로 ref에 저장하는 것이 좀 더 좋을 것 같습니다.
  const { moveTargetElement } = props;
  const hold = useRef(false)
  const positionGap = useRef({ x: 0, y: 0 })

  const handleMouseMove = useCallback((event) => {
    event.preventDefault();

    if (!hold.current) {
      return false;
    }

    const mousePosition = {
      x: event.pageX,
      y: event.pageY
    }
    const willBeTargetPosition = {
      x: mousePosition.x - positionGap.current.x,
      y: mousePosition.y - positionGap.current.y
    }

    moveTargetElement.current.style.left = `${willBeTargetPosition.x}px`
    moveTargetElement.current.style.top = `${willBeTargetPosition.y}px`
  }, [])

  const handleMouseDown = useCallback((event) => {
    event.preventDefault();

    if (!moveTargetElement.current) {
      return false;
    }

    const mousePosition = {
      x: event.pageX,
      y: event.pageY
    }
    const targetPosition = moveTargetElement.current.getBoundingClientRect();

    positionGap.current = {
      x: mousePosition.x - targetPosition.x,
      y: mousePosition.y - targetPosition.y
    }

    hold.current = true;

    document.addEventListener('mousemove', handleMouseMove);
  }, []);



  const handleRemoveController = useCallback((event) => {
    event.preventDefault();

    hold.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <StyledRemoteMenuControlButton
      onMouseDown={(event) => handleMouseDown(event)}
      onMouseUp={(event) => handleRemoveController(event)}
      {...props}
    >
      이동
    </StyledRemoteMenuControlButton>
  )
}


const RemoteMenuFoldButton = (props) => {
  return (
    <StyledRemoteMenuControlButton {...props}>
      X
    </StyledRemoteMenuControlButton>
  )
}

const RemoteMenu = ({ indexCards }) => {
  const [openMenuList, setOpenMenuList] = useState(false);
  const [openRemoteMenu, setOpenRemoteMenu] = useState(false);
  const containerElement = useRef(null);

  const toggleMenuList = () => {
    if (!openRemoteMenu) {
      return false;
    }
    setOpenMenuList(!openMenuList)
  }

  const toggleRemoteMenu = () => {
    setOpenMenuList(false);
    setOpenRemoteMenu(!openRemoteMenu);
  }

  return (
    <StyledRemoteMenuContainer
      ref={containerElement}
      className={[
        openMenuList ? "remote-menu-list--open" : "remote-menu-list--close",
        openRemoteMenu ? "remote-menu--open" : "remote-menu--close"]}
    >
      <StyledRemoteMenuButtonContainer>
        <RemoteMenuMoveButton moveTargetElement={containerElement} />
        <StyledRemoteMenuButton
          onClick={() => toggleMenuList()}
        >
          버튼
        </StyledRemoteMenuButton>
        <RemoteMenuFoldButton
          onClick={() => toggleRemoteMenu()}
        />
      </StyledRemoteMenuButtonContainer>
      <RemoteMenuList indexCards={indexCards} />
    </StyledRemoteMenuContainer>
  );
};

export default RemoteMenu;
