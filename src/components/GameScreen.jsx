import { useContext } from "react";
import { Navigate } from "react-router";
import { LoteryContext } from "../provider/LoteryProvider";
import "./GameScreen.css";

function GameScreen() {
  const { gameStep, playerA, playerB } = useContext(LoteryContext);

  if (gameStep !== 2) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      GameScreen <p>{JSON.stringify(playerA)}</p>
    </div>
  );
}

export default GameScreen;
