import { TempGameDiv, TempButton } from "./TempGame.styles";


import { UserInfo } from "../../types";

const TempGame = (props: {userData: UserInfo[], setUserData:any }) => {

  const {userData, setUserData} = props;

  const improveScore = () => {
    let newUserData = [...userData];
    const you = newUserData.find(user => user.name === "You");
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
