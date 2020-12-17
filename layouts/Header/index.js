import { StyledHeader, StyledTitle } from "./private.Header.styled";

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
