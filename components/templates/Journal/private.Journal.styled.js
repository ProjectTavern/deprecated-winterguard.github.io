import styled from "styled-components";

const StyledJournalContainer = styled.section`
  width: 100%;
`;

const StyledJournalHistoryTable = styled.table`
  width: 100%;
  padding: 40px 0;

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
