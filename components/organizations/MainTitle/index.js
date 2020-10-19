import { StyledMainTitle, StyledMainTitleLink, StyledMainTitleDescription } from './private.MainTitle.styled';

const MainTitle = ({ title, description, href }) => (
  <React.Fragment>
    <StyledMainTitle>
      <StyledMainTitleLink href={href}>{title}</StyledMainTitleLink>
    </StyledMainTitle>
  </React.Fragment>
)

export default MainTitle;
