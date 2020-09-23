import { StyledMainTitle, StyledMainTitleLink, StyledMainTitleDescription } from './private.MainTitle.styled';

const MainTitle = ({ title, description, href }) => (
  <>
    <StyledMainTitle>
      <StyledMainTitleLink href={href}>{title}</StyledMainTitleLink>
    </StyledMainTitle>
    <StyledMainTitleDescription>{description}</StyledMainTitleDescription>
  </>
)

export default MainTitle;
