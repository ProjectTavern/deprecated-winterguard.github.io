import {
  StyledJournalContainer,
  StyledJournalHistoryTable,
} from "./private.Journal.styled";

import JournalItem from "./JournalItem";

const Journal = ({ posts = [] }) => {
  const parsePosts = (posts) => {
    posts;
  };

  return (
    <StyledJournalContainer>
      <h2>Journal</h2>
      <StyledJournalHistoryTable>
        <thead>
          <tr>
            <th>History</th>
            <th>Diary</th>
            <th>Developments</th>
            <th>Etc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>2020. 11.</th>
            {new Array(3).fill(1).map((element, index) => {
              return (
                <td key={index}>
                  <ol>
                    {posts.map((post) => (
                      <li>
                        <JournalItem key={post.content} post={post}>
                          {post.title}
                        </JournalItem>
                      </li>
                    ))}
                  </ol>
                </td>
              );
            })}
          </tr>
        </tbody>
      </StyledJournalHistoryTable>
    </StyledJournalContainer>
  );
};

export default Journal;
