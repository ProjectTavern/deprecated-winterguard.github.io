import { IndexCard } from '../../molecules';
import { StyledIndexCardList } from './private.IndexCardList.styled';

const IndexCardList = ({ indexCards }) => (
  <StyledIndexCardList>
    {
      indexCards.map(({ ...props }) => <IndexCard {...props} />)
    }
  </StyledIndexCardList>
)

export default IndexCardList;
