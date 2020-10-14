import { StyledMainTitle, StyledMainTitleLink, StyledMainTitleDescription } from './private.MainTitle.styled';

const MainTitle = ({ title, description, href }) => (
  <React.Fragment>
    <StyledMainTitle>
      <StyledMainTitleLink href={href}>{title}</StyledMainTitleLink>
    </StyledMainTitle>
    <StyledMainTitleDescription>{description}</StyledMainTitleDescription>
  </React.Fragment>
)

export default MainTitle;
