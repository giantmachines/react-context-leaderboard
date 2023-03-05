import { useEffect, useState } from "react";
import Display from "../Display/Display";
import Modal from "../Modal/Modal";
import { AppDiv, Title } from "./App.styles";
import { UserInfo } from "../../types";
import { user_data } from "../../user_data";
import { idxIncrement, userID } from "../../utils";
import { createContext } from 'react';

export const UsersContext: UserInfo[]|any = createContext({});

const App = () => {
  const [userData, setUserData] = useState<UserInfo[]>(user_data);
  // const [modalIsOpen, setModalIsOpen] = useState<Boolean>(true);

  /* Every 2 seconds, update users' scores */
  let timer:NodeJS.Timer;
  useEffect(()=>{
    timer = setInterval(() => {
      let newUserData = [...userData];
      idxIncrement(newUserData).forEach((element) => {
        let user = newUserData[element.idx];
        if (user.id !== userID) {
          user.msTime += element.inc;
        }
      });
      setUserData(newUserData);
    }, 2000);

    return ()=>clearInterval(timer)
  },[])


  return (
    <UsersContext.Provider value={{userData:userData, setUserData:setUserData}}>
      <AppDiv>
        <Title>🤯 Memory Matching Game</Title>
        <Display/>
        {/* {modalIsOpen ? <Modal userData={userData} setUserData={setUserData} setModalIsOpen={setModalIsOpen}/> : ''} */}
      </AppDiv>
    </UsersContext.Provider>
  );
};

export default App;
