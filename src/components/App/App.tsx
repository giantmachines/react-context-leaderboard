import { useEffect, useState, useRef } from "react";
import Display from "../Display/Display";
import { AppDiv, Title } from "./App.styles";
import { UserInfo } from "../../types";
import { user_data } from "../../user_data";
import { idxIncrement, userID } from "../../utils";


const App = () => {
  const [userData, setUserData] = useState<UserInfo[]>(user_data);

  /* IGNORE THIS  - Every 2 seconds, update users' scores */
  let timer = useRef<NodeJS.Timer|undefined>(undefined);
  useEffect(()=>{
    timer.current = setInterval(() => {
      let newUserData = [...userData];
      idxIncrement(newUserData).forEach((element) => {
        let user = newUserData[element.idx];
        if (user.id !== userID) {
          user.msTime += element.inc;
        }
      });
      setUserData(newUserData);
    }, 2000);

    return ()=> timer.current && clearInterval(timer.current)
  },[])


  return (
    <AppDiv>
      <Title>🤯 Memory Matching Game</Title>
      <Display userData={userData} setUserData={setUserData} />
    </AppDiv>
  );
};

export default App;
