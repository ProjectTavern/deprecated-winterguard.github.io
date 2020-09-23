import styled from 'styled-components'

const StyledMainTitle = styled.div`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const StyledMainTitleLink = styled.a`
  color: #0070f3;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

const StyledMainTitleDescription = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

export { StyledMainTitle, StyledMainTitleLink, StyledMainTitleDescription };
