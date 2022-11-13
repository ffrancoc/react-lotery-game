import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { LoteryContext } from "../provider/LoteryProvider";
import "./StartScreen.css";

function StartScreen() {
  const navigate = useNavigate();
  const { gameStep, setGameStep } = useContext(LoteryContext);

  // Resetar variable gameStep al renderizar el componente
  useEffect(() => {
    setGameStep(0);
  }, []);

  // Evento para cambiar a siguiente ventana
  const onPressStart = () => {
    setGameStep(gameStep + 1);
    navigate("/selection");
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
