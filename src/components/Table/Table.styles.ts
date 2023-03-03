import styled from "styled-components";

export const TableViewRoot = styled.div`

  overflow: scroll;
  .row {
    width:100%;
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
  }

  .cell {
    padding: 15px;
    font-weight: normal;
    font-size: 14px;
    border-bottom: 1px solid #8f8f8d; 
  }
  .headerCell {
    background-color: #1e1e1b;
    padding: 10px;
    font-weight: normal;
    font-size: 14px;
    color: #8f8f8d;
  }
`;

export const NoWrapCell = styled.td``;
