import Link from "next/link";

import {
  StyledJournalItem,
  StyledJournalTitle,
  StyledJournalDate,
} from "./private.JournalItem.styled";

const JournalItem = ({ children, post }) => {
  return (
    <Link href={post.slug}>
      <StyledJournalItem>
        <StyledJournalTitle>{post.title}</StyledJournalTitle>
        <StyledJournalDate>{post.writtenAt}</StyledJournalDate>
      </StyledJournalItem>
    </Link>
  );
};

export default JournalItem;
