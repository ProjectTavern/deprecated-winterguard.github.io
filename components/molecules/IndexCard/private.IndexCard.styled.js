import styled from 'styled-components'

const StyledIndexCard = styled.a`
  margin: 0.5rem 0;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  min-width: 320px;
  max-width: 320px;
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const StyledIndexCardTitle = styled.h3`
  font-size: 1.5rem;
`;

const StyledIndexCardDescription = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;

export {
  StyledIndexCard,
  StyledIndexCardTitle,
  StyledIndexCardDescription
};
