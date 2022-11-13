import { createContext } from "react";
import { useState } from "react";

export const LoteryContext = createContext();

export default function LoteryProvider({ children }) {
  const [gameStep, setGameStep] = useState(0);
  const [namePlayerA, setNamePlayerA] = useState("");
  const [namePlayerB, setNamePlayerB] = useState("");
  const [cartonPlayerA, setCartonPlayerA] = useState(0);
  const [cartonPlayerB, setCartonPlayerB] = useState(0);
  const [playerA, setPlayerA] = useState({});
  const [playerB, setPlayerB] = useState({});

  return (
    <LoteryContext.Provider
      value={{
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
        playerA,
        setPlayerA,
        playerB,
        setPlayerB,
      }}
    >
      {children}
    </LoteryContext.Provider>
  );
}
