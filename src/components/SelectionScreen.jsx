import { useState } from "react";
import { useContext } from "react";
import { useNavigate, Navigate } from "react-router";
import { useEffect } from "react";
import { LoteryContext } from "../provider/LoteryProvider";
import PreviewCartonA from "../assets/carton1.png";
import PreviewCartonB from "../assets/carton2.png";
import PreviewCartonC from "../assets/carton3.png";
import PreviewCartonD from "../assets/carton4.png";
import PreviewCartonE from "../assets/carton5.png";
import PreviewCartonF from "../assets/carton6.png";
import PreviewCartonG from "../assets/carton7.png";
import PreviewCartonH from "../assets/carton8.png";
import PreviewCartonI from "../assets/carton9.png";
import PreviewCartonJ from "../assets/carton10.png";
import "./SelectionScreen.css";

function SelectionScreen() {
  const navigate = useNavigate();

  const {
    gameStep,
    setGameStep,
    namePlayerA,
    setNamePlayerA,
    namePlayerB,
    setNamePlayerB,
    cartonPlayerA,
    setCartonPlayerA,
    cartonPlayerB,
    setCartonPlayerB,
    setPlayerA,
    setPlayerB,
  } = useContext(LoteryContext);

  const [cartonPreviews, setCartonPreview] = useState([]);

  useEffect(() => {
    setCartonPreview([
      PreviewCartonA,
      PreviewCartonB,
      PreviewCartonC,
      PreviewCartonD,
      PreviewCartonE,
      PreviewCartonF,
      PreviewCartonG,
      PreviewCartonH,
      PreviewCartonI,
      PreviewCartonJ,
    ]);
  }, []);

  // Validar variable gameStep
  if (gameStep !== 1) {
    return <Navigate to="/" />;
  }

  const onStartGame = (event) => {
    event.preventDefault();
    if (namePlayerA === namePlayerB) {
      alert("The player name cannot be same");
    }
    if (cartonPlayerA === cartonPlayerB) {
      alert("Please choose a diferent lotery carton for players");
    }

    if (namePlayerA !== namePlayerB && cartonPlayerA !== cartonPlayerB) {
      console.log(`usuario A: ${namePlayerA}, ${cartonPlayerA}`);
      console.log(`usuario B: ${namePlayerB}, ${cartonPlayerB}`);
      setPlayerA({
        name: namePlayerA,
        carton: cartonPlayerA,
      });
      setPlayerB({
        name: namePlayerB,
        carton: cartonPlayerB,
      });
      setGameStep(gameStep + 1);
      navigate("/game");
    }
  };

  return (
    <div className="selection-screen">
      <form className="selection-form" action="post" onSubmit={onStartGame}>
        <h1>Choose a Carton</h1>
        <div className="container">
          <div className="player">
            <h3>Player A</h3>
            <hr />
            <label htmlFor="player-a">Player A</label>
            <input
              type="text"
              name="plater-a"
              placeholder="Enter name"
              value={namePlayerA}
              onChange={(e) => setNamePlayerA(e.target.value)}
              required
            />
            <label htmlFor="carton-a">Choose a Carton</label>
            <select
              name="carton-a"
              value={cartonPlayerA}
              onChange={(e) => setCartonPlayerA(e.target.value)}
            >
              <option value="0">Carton 1</option>
              <option value="1">Carton 2</option>
              <option value="2">Carton 3</option>
              <option value="3">Carton 4</option>
              <option value="4">Carton 5</option>
              <option value="5">Carton 6</option>
              <option value="6">Carton 7</option>
              <option value="7">Carton 8</option>
              <option value="8">Carton 9</option>
              <option value="9">Carton 10</option>
            </select>
            <p>Preview</p>
            <img
              src={cartonPreviews[cartonPlayerA]}
              alt="carton A"
              width="200px"
            />
          </div>
          <div className="player">
            <h3>Player B</h3>
            <hr />
            <label htmlFor="player-b">Player B</label>
            <input
              type="text"
              name="player-b"
              placeholder="Enter name"
              value={namePlayerB}
              onChange={(e) => setNamePlayerB(e.target.value)}
              required
            />
            <label htmlFor="carton-b">Choose a Carton</label>
            <select
              name="carton-b"
              value={cartonPlayerB}
              onChange={(e) => setCartonPlayerB(e.target.value)}
            >
              <option value="0">Carton 1</option>
              <option value="1">Carton 2</option>
              <option value="2">Carton 3</option>
              <option value="3">Carton 4</option>
              <option value="4">Carton 5</option>
              <option value="5">Carton 6</option>
              <option value="6">Carton 7</option>
              <option value="7">Carton 8</option>
              <option value="8">Carton 9</option>
              <option value="9">Carton 10</option>
            </select>
            <p>Preview</p>
            <img
              src={cartonPreviews[cartonPlayerB]}
              alt="carton B"
              width="200px"
            />
          </div>
        </div>
        <input className="next-button" type="submit" value="Next" />
      </form>
    </div>
  );
}

export default SelectionScreen;
