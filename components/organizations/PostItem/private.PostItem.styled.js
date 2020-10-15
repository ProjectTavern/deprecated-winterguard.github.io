import styled from "styled-components";

const StyledPostItem = styled.li`
  width: 100%;
  min-height: 88px;
  margin: 8px 0;
  padding: 24px 32px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  &:hover {
    border-color: #9e9e9e;
  }
`;

const StyledPostTitle = styled.strong`
  display: block;
  margin-bottom: 4px;
`

const StyledPostDate = styled.span`
  font-size: 0.8rem;  
  color: #7e7e7e;
`

export {
  StyledPostItem, StyledPostTitle, StyledPostDate
};
