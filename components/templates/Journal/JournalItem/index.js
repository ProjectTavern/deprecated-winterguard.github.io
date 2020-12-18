import Link from "next/link";

import {
  StyledJournalItem,
  StyledJournalImageContainer,
  StyledImageBorder,
  StyledJournalTitleWrapper,
  StyledJournalTitle,
  StyledJournalDate,
} from "./private.JournalItem.styled";

const JournalItem = ({ children, post }) => {
  return (
    <Link href={post.slug}>
      <StyledJournalItem>
        <StyledJournalImageContainer>
          <StyledImageBorder>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
          </StyledImageBorder>
        </StyledJournalImageContainer>
        <StyledJournalTitleWrapper>
          <StyledJournalTitle>{post.title}</StyledJournalTitle>
          <StyledJournalDate>{post.writtenAt}</StyledJournalDate>
        </StyledJournalTitleWrapper>
      </StyledJournalItem>
    </Link>
  );
};

export default JournalItem;
