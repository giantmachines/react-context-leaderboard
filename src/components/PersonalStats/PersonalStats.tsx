import { PersonalStatsDiv } from "./PersonalStats.styles";
import { convertTime, userID } from "../../utils";
import { useContext } from "react";
import { UsersContext } from "../App/App";
import { UsersContextType } from "../../types";


const PersonalStats = () => {

  const state: UsersContextType = useContext(UsersContext);
  const {userData, currentTime} = state;

  const you = userData.find(user => user.id === userID);
  const yourTime = you ? you.msTime : 0;

  return (
    <PersonalStatsDiv>
      <div>
        <h1>Current Game</h1>
        <p>{convertTime(currentTime)}</p>
      </div>
      <div>
        <h1>Personal Best</h1>
        <p>{convertTime(yourTime)}</p>
      </div>
    </PersonalStatsDiv>
  );
};

export default PersonalStats;
