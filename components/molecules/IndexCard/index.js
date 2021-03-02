import Link from "next/link";

import {
  StyledIndexCard,
  StyledIndexCardTitle,
  StyledIndexCardDescription,
} from "./private.IndexCard.styled";

const IndexCard = ({ title, description, href, target }) => (
  <StyledIndexCard href={href} target={target}>
    <StyledIndexCardTitle>
      {title} &rarr;
      <br />
      <StyledIndexCardDescription>{description}</StyledIndexCardDescription>
    </StyledIndexCardTitle>
  </StyledIndexCard>
);

export default IndexCard;
