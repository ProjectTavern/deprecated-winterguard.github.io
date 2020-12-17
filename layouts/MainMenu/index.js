import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { StyledMenu, StyledMenuItem } from "./private.MainMenu.styled";
import { useCallback } from "react";

import { mainMenus } from "@/store/document";

const MainMenu = ({}) => {
  const router = useRouter();
  const { asPath } = router;
  const [currentCategory] = asPath.split("/").filter((category) => category);

  const onCategoryClick = useCallback(() => {
    console.log("onCategoryClick");
  }, []);

  return (
    <StyledMenu>
      {mainMenus.map(({ title, href }) => (
        <StyledMenuItem
          key={href}
          onClick={onCategoryClick}
          className={href.includes(currentCategory) ? "on" : ""}
        >
          <Link href={href}>{title}</Link>
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );
};

export default MainMenu;
