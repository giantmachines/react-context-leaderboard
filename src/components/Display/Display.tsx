import { DisplayDiv } from "./Display.styles";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
// import TempGame from "../TempGame/TempGame";
import TempGame2 from "../TempGame2/TempGame2";

const Display = () => {

  return (
    <DisplayDiv>
      <TempGame2/>
      <LeaderBoard/>
    </DisplayDiv>
  );
};

export default Display;
