import styled from 'styled-components'

const StyledMainTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 50px);
  min-width: calc(100vw - 3rem);
  height: 30vw;
  line-height: 1.15;
  font-size: 2.5rem;
  text-align: center;
  border: 1px solid #020202;
`;

const StyledMainTitleLink = styled.a`
  display: block;
  color: #0070f3;
  text-decoration: none;
`;

const StyledMainTitleDescription = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

export { StyledMainTitle, StyledMainTitleLink, StyledMainTitleDescription };
