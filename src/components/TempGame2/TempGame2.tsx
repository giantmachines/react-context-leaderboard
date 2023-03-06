import { TempGame2Div, TempButton } from "./TempGame2.styles";
import { userID } from "../../utils";
import { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../types";

// import { UsersContextType } from "../../types";
// import { UsersContext } from "../App/App";



const TempGame2 = () => {

  // const state: UsersContextType = useContext(UsersContext);
  // const {userData, setUserData} = state;
  const [userData, setUserData] = useState<UserInfo[]>([]);   // DELETE ME! - Uncomment the rest


  const [currentTime, setCurrentTime] = useState(10000000);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerID, setTimerID] = useState<NodeJS.Timer>();

  useEffect(()=> {
    if(timerStarted){
      const startTime = Date.now();
      setTimerID(setInterval(()=>{
        setCurrentTime(Date.now()-startTime);
      }, 10))
    }else{
      if(timerID) clearInterval(timerID);
    }
  }, [timerStarted])
  const startTimer = () => {
    setTimerStarted(true);
  }
  const restartTimer = () => {
    setTimerStarted(false);
    setCurrentTime(10000000);
    if(timerID) clearInterval(timerID);
  }

  const checkImproveScore = () => {
    setTimerStarted(false);
    if(timerID) clearInterval(timerID);
    if(currentTime !== 0) {
      let newUserData = [...userData];
      const you = newUserData.find(user => user.id === userID);
      if (you && you.msTime > currentTime) {
        you.msTime = currentTime;
      }
      setUserData(newUserData);
    }
  }

  return (
    <TempGame2Div>
      <TempButton id="start" style={{backgroundColor:'#8FBC8F'}} onClick={startTimer}>Start Timer</TempButton>
      <TempButton style={{backgroundColor:'#FFB6C1'}} onClick={checkImproveScore}>Stop Timer</TempButton>
      <TempButton style={{backgroundColor:'#D3D3D3'}} onClick={restartTimer}>Reset Timer</TempButton>
    </TempGame2Div>
  );
};

export default TempGame2;
