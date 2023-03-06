import { PersonalStatsDiv } from "./PersonalStats.styles";
import { convertTime, userID } from "../../utils";
import { UserInfo } from "../../types";


const PersonalStats = (props : {userData: UserInfo[]}) => {

  const {userData} = props;

  const you = userData.find(user => user.id === userID);
  const yourTime = you ? you.msTime : 0;

  return (
    <PersonalStatsDiv>
      <div>
        <h1>Personal Best</h1>
        <p>{convertTime(yourTime)}</p>
      </div>
    </PersonalStatsDiv>
  );
};

export default PersonalStats;
