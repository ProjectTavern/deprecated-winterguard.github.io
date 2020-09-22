import { StyledIndexCard, StyledIndexCardTitle, StyledIndexCardDescription } from './private.IndexCard.styled';

 const IndexCard = ({ title, description, href, target }) => (
    <StyledIndexCard href={href} target={target}>
        <StyledIndexCardTitle>{title} &rarr;</StyledIndexCardTitle>
        <StyledIndexCardDescription>{description}</StyledIndexCardDescription>
    </StyledIndexCard>)

export default IndexCard;
