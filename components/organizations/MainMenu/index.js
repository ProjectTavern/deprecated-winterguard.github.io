import React from "react";
import Link from "next/link";

import { StyledMenu, StyledMenuItem } from "./private.MainMenu.styled";

const MainMenu = ({}) => (
  <StyledMenu>
    <StyledMenuItem>
      <Link href="/news">News</Link>
    </StyledMenuItem>
    <StyledMenuItem>
      <Link href="/diary">Diary</Link>
    </StyledMenuItem>
    <StyledMenuItem>
      <Link href="/journal">Journal</Link>
    </StyledMenuItem>
    <StyledMenuItem>
      <Link href="/algorithm">Algorithm</Link>
    </StyledMenuItem>
    <StyledMenuItem>
      <Link href="/portfolio">Portfolio</Link>
    </StyledMenuItem>
    <StyledMenuItem>
      <Link href="profile">Profile</Link>
    </StyledMenuItem>
  </StyledMenu>
);

export default MainMenu;
