import Link from 'next/link'

import { StyledIndexCard, StyledIndexCardTitle, StyledIndexCardDescription } from './private.IndexCard.styled';

 const IndexCard = ({ title, description, href, target }) => (
   <Link href={href} target={target}>
      <StyledIndexCard>
        <StyledIndexCardTitle>{title} &rarr;</StyledIndexCardTitle>
        <StyledIndexCardDescription>{description}</StyledIndexCardDescription>
      </StyledIndexCard>
    </Link>)

export default IndexCard;
