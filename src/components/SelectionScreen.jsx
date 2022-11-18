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
    gameScreen,
    setGameScreen,
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
  const [cartonTemplate, setCartonTemplate] = useState([]);

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

    setCartonTemplate([
      {
        id: "0",
        cards: [1, 2, 3, 4, 10, 11, 12, 13, 19, 20, 21, 22, 28, 29, 30, 31],
        count: 16,
      },
      {
        id: "1",
        cards: [6, 7, 8, 9, 15, 16, 17, 18, 24, 25, 26, 27, 33, 34, 35, 36],
        count: 16,
      },
      {
        id: "2",
        cards: [2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20],
        count: 16,
      },
      {
        id: "3",
        cards: [43, 44, 45, 21, 52, 53, 54, 26, 7, 8, 9, 31, 16, 17, 18, 36],
        count: 16,
      },
      {
        id: "4",
        cards: [22, 23, 24, 25, 27, 28, 29, 30, 32, 33, 34, 35, 37, 38, 39, 40],
        count: 16,
      },
      {
        id: "5",
        cards: [21, 22, 23, 24, 30, 31, 32, 33, 39, 40, 41, 42, 48, 49, 50, 51],
        count: 16,
      },
      {
        id: "6",
        cards: [25, 26, 27, 41, 34, 35, 36, 46, 43, 44, 45, 51, 52, 53, 54, 32],
        count: 16,
      },
      {
        id: "7",
        cards: [42, 43, 44, 45, 47, 48, 49, 50, 52, 53, 54, 1, 40, 10, 19, 20],
        count: 16,
      },
      {
        id: "8",
        cards: [41, 42, 37, 38, 50, 51, 46, 47, 5, 6, 1, 2, 14, 15, 10, 11],
        count: 16,
      },
      {
        id: "9",
        cards: [39, 40, 19, 20, 48, 49, 28, 29, 3, 4, 37, 38, 12, 13, 46, 47],
        count: 16,
      },
    ]);
  }, []);

  if (gameScreen !== 1) {
    return <Navigate to="/" />;
  }

  const onPlayGame = (event) => {
    event.preventDefault();

    console.log(cartonPlayerA);
    console.log(cartonPlayerB);

    if (namePlayerA === namePlayerB) {
      alert("Los jugadores no pueden tener el mismo nombre");
    }
    if (cartonPlayerA === cartonPlayerB) {
      alert("Seleccione un carton diferente para cada jugador");
    }

    if (namePlayerA !== namePlayerB && cartonPlayerA !== cartonPlayerB) {
      setPlayerA({
        name: namePlayerA,
        carton: cartonTemplate.filter((ct) => ct.id === cartonPlayerA),
      });
      setPlayerB({
        name: namePlayerB,
        carton: cartonTemplate.filter((ct) => ct.id === cartonPlayerB),
      });
      setGameScreen(gameScreen + 1);
      navigate("/game");
    }
  };

  return (
    <div className="selection-screen">
      <form action="post" onSubmit={onPlayGame}>
        <h1>Pantalla de Selección</h1>
        <div className="container">
          <div className="player">
            <h3>Jugador A</h3>
            <hr />
            <label htmlFor="player-a">Nombre</label>
            <input
              type="text"
              name="plater-a"
              placeholder="Enter name"
              value={namePlayerA}
              onChange={(e) => setNamePlayerA(e.target.value)}
              required
            />
            <label htmlFor="carton-a">Carton</label>
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
            <p>Vista Previa</p>
            <img
              src={cartonPreviews[cartonPlayerA]}
              alt="carton A"
              width="160px"
            />
          </div>
          <div className="player">
            <h3>Jugador B</h3>
            <hr />
            <label htmlFor="player-b">Nombre</label>
            <input
              type="text"
              name="player-b"
              placeholder="Enter name"
              value={namePlayerB}
              onChange={(e) => setNamePlayerB(e.target.value)}
              required
            />
            <label htmlFor="carton-b">Carton</label>
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
            <p>Vista Previa</p>
            <img
              src={cartonPreviews[cartonPlayerB]}
              alt="carton B"
              width="160px"
            />
          </div>
        </div>
        <input className="next-button" type="submit" value="Comenzar Partida" />
      </form>
    </div>
  );
}

export default SelectionScreen;
