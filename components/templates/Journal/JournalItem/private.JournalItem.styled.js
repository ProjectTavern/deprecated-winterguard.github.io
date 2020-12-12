import styled from "styled-components";

const StyledJournalItem = styled.section`
  width: 100%;
  padding: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  &:hover {
    border-color: #9e9e9e;
  }
`;

const StyledJournalTitle = styled.strong`
  display: block;
  margin-bottom: 4px;
`;

const StyledJournalDate = styled.span`
  font-size: 0.8rem;
  color: #7e7e7e;
`;

export { StyledJournalItem, StyledJournalTitle, StyledJournalDate };
