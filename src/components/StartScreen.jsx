import { useContext } from "react";
import { LoteryContext } from "../provider/LoteryProvider";
import "./StartScreen.css";

function StartScreen() {
  const { setGameStep } = useContext(LoteryContext);

  const onPressStart = () => {
    setGameStep(1);
  };

  return (
    <div className="start-screen">
      <h1>React Lotery Game</h1>
      <h2>&#40; Start Screen &#41;</h2>
      <button onClick={onPressStart}>Press Start</button>
    </div>
  );
}

export default StartScreen;
