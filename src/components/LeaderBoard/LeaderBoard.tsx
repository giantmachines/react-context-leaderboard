import { LeaderBoardDiv, LeaderBoardTitle } from "./LeaderBoard.styles";
import Table from "../Table/Table"
import PersonalStats from "../PersonalStats/PersonalStats"
import { UserInfo } from "../../types";


const LeaderBoard = (props : {userData:UserInfo[]}) => {

  const {userData} = props;

  return (
    <LeaderBoardDiv>
      <LeaderBoardTitle>📈 Leader Board 📈</LeaderBoardTitle>
      <PersonalStats userData={userData} />
      <Table userData={userData}/>
    </LeaderBoardDiv>
  );
};

export default LeaderBoard;
