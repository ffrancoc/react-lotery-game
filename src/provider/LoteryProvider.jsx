import { createContext } from "react";
import { useState } from "react";

export const LoteryContext = createContext();

export default function LoteryProvider({ children }) {
  const [gameScreen, setGameScreen] = useState(0);
  const [namePlayerA, setNamePlayerA] = useState("Player A");
  const [namePlayerB, setNamePlayerB] = useState("Player B");
  const [cartonPlayerA, setCartonPlayerA] = useState("0");
  const [cartonPlayerB, setCartonPlayerB] = useState("1");
  const [playerA, setPlayerA] = useState({});
  const [playerB, setPlayerB] = useState({});
  const [loteryCards, setLoteryCards] = useState([]);
  const [unselectedCards, setUnselectedCards] = useState([]);

  return (
    <LoteryContext.Provider
      value={{
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
        playerA,
        setPlayerA,
        playerB,
        setPlayerB,
        loteryCards,
        setLoteryCards,
        unselectedCards,
        setUnselectedCards,
      }}
    >
      {children}
    </LoteryContext.Provider>
  );
}
