import { PersonalStatsDiv } from "./PersonalStats.styles";
import { convertTime, userID } from "../../utils";
import { UserInfo } from "../../types";
import { useContext } from "react";
import { UsersContext } from "../App/App";
import { UsersContextType } from "../../types";


const PersonalStats = () => {

  const state: UsersContextType = useContext(UsersContext);
  const {userData} = state;

  const you = userData.find(user => user.id === userID);
  const yourTime = you ? you.msTime : 0;

  return (
    <PersonalStatsDiv>
      <h1>Personal Best</h1>
      <p>{convertTime(yourTime)}</p>
    </PersonalStatsDiv>
  );
};

export default PersonalStats;
