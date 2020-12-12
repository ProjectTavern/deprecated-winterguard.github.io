import {
  StyledJournalContainer,
  StyledJournalHistoryTable,
} from "./private.Journal.styled";

import JournalItem from "./JournalItem";

const Journal = ({ posts = [] }) => {
  const parsePostsOrderByDate = (journalPosts) => {
    const journalPostsOrderByDate = {};
    journalPosts.forEach((journalPost) => {
      const { writtenAt } = journalPost;
      const [yearMonth] = writtenAt.match(/\w{4}-\w{2}/);
      if (journalPostsOrderByDate[yearMonth]) {
        return journalPostsOrderByDate[yearMonth].push(journalPost);
      }
      return (journalPostsOrderByDate[yearMonth] = [journalPost]);
    });

    return journalPostsOrderByDate;
  };

  const sortedPosts = posts.sort((prevPost, nextPost) =>
    nextPost.writtenAt.localeCompare(prevPost.writtenAt)
  );

  const journalPostsOrderByDate = Object.entries(
    parsePostsOrderByDate(sortedPosts)
  ).sort(([prevDate], [nextDate]) => nextDate.localeCompare(prevDate));

  return (
    <StyledJournalContainer>
      <h2>Journal</h2>
      <StyledJournalHistoryTable>
        <colgroup>
          <col width="10%" />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th className="thead-history">History</th>
            <th>Diary</th>
            <th>Developments</th>
            <th>Etc</th>
          </tr>
        </thead>
        <tbody>
          {journalPostsOrderByDate.map(([key, journalPosts]) => {
            return (
              <tr key={key}>
                <th>{key}</th>
                {new Array(3).fill(1).map((element, index) => {
                  return (
                    <td key={index}>
                      <ol>
                        {journalPosts.map((journalPost) => (
                          <li key={journalPost.content}>
                            <JournalItem post={journalPost}>
                              {journalPost.title}
                            </JournalItem>
                          </li>
                        ))}
                      </ol>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledJournalHistoryTable>
    </StyledJournalContainer>
  );
};

export default Journal;
