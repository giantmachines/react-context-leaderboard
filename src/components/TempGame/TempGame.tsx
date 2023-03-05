import { TempGameDiv, TempButton } from "./TempGame.styles";
import { userID } from "../../utils";


import { UserInfo, UsersContextType } from "../../types";
import { useContext } from "react";
import { UsersContext } from "../App/App";

const TempGame = () => {

  const state: UsersContextType = useContext(UsersContext);
  const {userData, setUserData} = state;

  const improveScore = () => {
    let newUserData = [...userData];
    const you = newUserData.find(user => user.id === userID);
    if (you) {
      you.msTime -= 5000;
    }
    setUserData(newUserData);
  }

  return (
    <TempGameDiv>
      <TempButton onClick={improveScore}>Win Game Faster</TempButton>
    </TempGameDiv>
  );
};

export default TempGame;
