import { PersonalStatsDiv } from "./PersonalStats.styles";
import { convertTime } from "../../utils";


import { UserInfo } from "../../types";
import { useEffect } from "react";

const PersonalStats = (props : {userData: UserInfo[]}) => {

  const {userData} = props;

  const you = userData.find(user => user.name === "You");
  const yourTime = you ? you.msTime : 0;

  return (
    <PersonalStatsDiv>
      <h1>Personal Best</h1>
      <p>{convertTime(yourTime)}</p>
    </PersonalStatsDiv>
  );
};

export default PersonalStats;
