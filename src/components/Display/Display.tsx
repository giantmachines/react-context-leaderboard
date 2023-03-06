import { DisplayDiv } from "./Display.styles";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import TempGame from "../TempGame/TempGame";
import { UserInfo } from "../../types";


const Display = (props : {userData:UserInfo[], setUserData:any}) => {

  const {userData, setUserData} = props;

  return (
    <DisplayDiv>
      <TempGame userData={userData} setUserData={setUserData}/>
      <LeaderBoard userData={userData}/>
    </DisplayDiv>
  );
};

export default Display;
