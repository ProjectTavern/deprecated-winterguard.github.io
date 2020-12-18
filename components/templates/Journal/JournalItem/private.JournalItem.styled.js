import styled from "styled-components";

const StyledJournalItem = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  &:hover div {
    border-color: #9e9e9e;
  }
`;

const StyledJournalImageContainer = styled.div`
  flex-grow: 1;
  padding: 10%;
  cursor: pointer;
`;

const StyledImageBorder = styled.div`
  position: relative;
  overflow: hidden;
  border: 7px solid #e5e5e5;
  border-radius: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const StyledJournalTitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  font-size: 1.5rem;
  text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
`;

const StyledJournalTitle = styled.strong`
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
`;

const StyledJournalDate = styled.span`
  font-size: 0.8rem;
  color: #7e7e7e;
`;

export {
  StyledJournalItem,
  StyledJournalImageContainer,
  StyledImageBorder,
  StyledJournalTitleWrapper,
  StyledJournalTitle,
  StyledJournalDate,
};
