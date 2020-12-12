import styled from "styled-components";

const StyledJournalContainer = styled.section`
  width: 100%;
  h2 {
    font-size: 2.5rem;
    width: 10%;
    text-align: right;
  }
`;

const StyledJournalHistoryTable = styled.table`
  width: 100%;
  padding: 40px 0;

  .thead-history {
    font-size: 1.5rem;
    text-align: right;
  }

  tbody {
    th {
      text-align: right;
    }
  }

  td {
    padding: 24px 12px;

    li {
      padding: 8px;
      font-weight: 300;
    }
  }
`;

export { StyledJournalContainer, StyledJournalHistoryTable };
