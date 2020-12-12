import { StyledJournal } from "./private.Journal.styled";

import { PostItem } from "@/components/organizations";

const Journal = ({ posts = [] }) => {
  return (
    <StyledJournal>
      {posts.map((post) => (
        <PostItem key={post.content} post={post}>
          {post.title}
        </PostItem>
      ))}
    </StyledJournal>
  );
};

export default Journal;
