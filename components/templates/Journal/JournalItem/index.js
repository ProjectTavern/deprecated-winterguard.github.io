import Link from "next/link";

import {
  StyledJournalItem,
  StyledJournalTitle,
  StyledJournalDate,
} from "./private.JournalItem.styled";

const JournalItem = ({ children, post }) => {
  return (
    <StyledJournalItem>
      <Link href={post.slug}>
        <StyledJournalTitle>{children}</StyledJournalTitle>
      </Link>
      <StyledJournalDate>{post.writtenAt}</StyledJournalDate>
    </StyledJournalItem>
  );
};

export default JournalItem;
