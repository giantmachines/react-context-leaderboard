import { LeaderBoardDiv, LeaderBoardTitle } from "./LeaderBoard.styles";
import Table from "../Table/Table"
import PersonalStats from "../PersonalStats/PersonalStats"

const LeaderBoard = () => {
  return (
    <LeaderBoardDiv>
      <LeaderBoardTitle>📈 Leader Board 📈</LeaderBoardTitle>
      <PersonalStats />
      <Table/>
    </LeaderBoardDiv>
  );
};

export default LeaderBoard;
