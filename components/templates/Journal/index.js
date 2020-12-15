import React, { useState, useRef, useEffect } from "react";

import {
  StyledJournalContainer,
  StyledJournalHistoryTable,
} from "./private.Journal.styled";

import JournalItem from "./JournalItem";

const Journal = ({ posts = {} }) => {
  const [deviceMediaType, setDeviceMediaType] = useState(null);
  const [updatedPosts, setUpdatedPosts] = useState(null);

  const generateMobilePosts = (posts) => {
    const parentCategory = {
      key: "journal",
      posts: [],
      children: [
        {
          key: "",
          posts: [],
        },
      ],
    };

    posts.children.forEach(
      (child) =>
        (parentCategory.children[0].posts = [
          ...parentCategory.children[0].posts,
          ...child.posts,
        ])
    );
    parentCategory.children[0].posts.sort((a, b) =>
      a.filename.localeCompare(b.filename)
    );

    return parentCategory;
  };

  const pcPosts = { ...posts };
  const mobilePosts = generateMobilePosts(posts);

  useEffect(() => {
    const checkDeviceType = () => {
      const divisionMediaWidth = 768;
      if (window.innerWidth > divisionMediaWidth) {
        setDeviceMediaType("pc");
      } else if (window.innerWidth <= divisionMediaWidth) {
        setDeviceMediaType("mobile");
      }
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  useEffect(() => {
    switch (deviceMediaType) {
      case "pc": {
        setUpdatedPosts(pcPosts);
        break;
      }
      case "mobile": {
        setUpdatedPosts(mobilePosts);
        break;
      }
      default: {
      }
    }

    return () => setUpdatedPosts(null);
  }, [deviceMediaType]);

  const parsePostsOrderByDate = (journalPosts, key) => {
    const journalPostsOrderByDate = {};
    journalPosts.forEach((journalPost) => {
      const { writtenAt } = journalPost;
      const [yearMonth] = writtenAt.match(/\w{4}-\w{2}/);

      if (!journalPostsOrderByDate[yearMonth]) {
        journalPostsOrderByDate[yearMonth] = {};
        journalPostsOrderByDate[yearMonth][key] = [];
      }

      return journalPostsOrderByDate[yearMonth][key].push(journalPost);
    });

    return journalPostsOrderByDate;
  };

  const getParseAndAssignCategoryPosts = (posts) => {
    const postsOrderByDate = {};
    const postCategoryChildren = posts.children;
    postCategoryChildren.forEach((child) => {
      const childOrderByDate = parsePostsOrderByDate(child.posts, child.key);

      postCategoryChildren.forEach((child) => {
        Object.keys(childOrderByDate).forEach((dateKey) => {
          if (!postsOrderByDate[dateKey]) {
            postsOrderByDate[dateKey] = {};
          }
          if (!postsOrderByDate[dateKey][child.key]) {
            postsOrderByDate[dateKey][child.key] = [];
          }
        });
      });

      Object.keys(childOrderByDate).forEach((dateKey) => {
        if (!postsOrderByDate[dateKey]) {
          postsOrderByDate[dateKey] = {};
        }

        postsOrderByDate[dateKey] = Object.assign(
          postsOrderByDate[dateKey],
          childOrderByDate[dateKey]
        );
      });
    });

    return postsOrderByDate;
  };

  const sortedPosts = (posts) =>
    posts.sort((prevPost, nextPost) =>
      nextPost.writtenAt.localeCompare(prevPost.writtenAt)
    );

  const sortPostsObjectByDate = (posts) =>
    posts.sort(([prevDate], [nextDate]) => nextDate.localeCompare(prevDate));

  const TableHead = ({ posts }) => {
    return (
      <thead>
        <tr>
          <th className="thead-history">History</th>
          {posts.children.map((child) => (
            <th key={child.key}>
              {child.key.replace(/\b[a-z]/, (letter) => letter.toUpperCase())}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const TableBody = ({ posts }) => {
    const postsOrderByDate = getParseAndAssignCategoryPosts(posts);
    const parsePosts = sortPostsObjectByDate(Object.entries(postsOrderByDate));

    return (
      <tbody>
        {parsePosts.map(([key, journalPosts]) => {
          return (
            <tr key={key}>
              <th>{key}</th>
              {Object.entries(journalPosts).map(
                ([journalCategoryKey, journalCategory]) => {
                  return (
                    <td key={journalCategoryKey}>
                      <ol>
                        {sortedPosts(journalCategory).map((journalPost) => {
                          return (
                            <li key={journalPost.key}>
                              <JournalItem post={journalPost} />
                            </li>
                          );
                        })}
                      </ol>
                    </td>
                  );
                }
              )}
            </tr>
          );
        })}
      </tbody>
    );
  };

  if (!updatedPosts) {
    return <StyledJournalContainer></StyledJournalContainer>;
  }

  return (
    <StyledJournalContainer>
      <h2>Journal</h2>
      <StyledJournalHistoryTable>
        <colgroup>
          <col width="10%" />
          <col width="30%" />
          <col width="30%" />
          <col width="30%" />
        </colgroup>
        <TableHead posts={updatedPosts} />
        <TableBody posts={updatedPosts} />
        {/* <tbody>
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
        </tbody> */}
      </StyledJournalHistoryTable>
    </StyledJournalContainer>
  );
};

export default Journal;
