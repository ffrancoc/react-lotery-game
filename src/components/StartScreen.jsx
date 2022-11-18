import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { LoteryContext } from "../provider/LoteryProvider";
import "./StartScreen.css";

function StartScreen() {
  const navigate = useNavigate();
  const { gameScreen, setGameScreen } = useContext(LoteryContext);

  useEffect(() => {
    setGameScreen(0);
  }, []);

  const onStartGame = () => {
    setGameScreen(gameScreen + 1);
    navigate("/selection");
  };

  return (
    <div className="start-screen">
      <div className="card">
        <h1>React Lotery Game</h1>
        <h2>&#40; Pagina de Inicio &#41;</h2>
        <button onClick={onStartGame}>Iniciar Juego</button>
      </div>
    </div>
  );
}

export default StartScreen;
