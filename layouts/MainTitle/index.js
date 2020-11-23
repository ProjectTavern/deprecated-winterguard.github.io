import React from "react";
import {
  StyledMainTitleLink,
  StyledHeadingTitle,
} from "./private.MainTitle.styled";

const MainTitle = ({ title, href }) => (
  <StyledMainTitleLink href={href}>
    <StyledHeadingTitle>
      <em>{title}</em>
      <span>The Elementary Designer</span>
    </StyledHeadingTitle>
  </StyledMainTitleLink>
);

export default MainTitle;
