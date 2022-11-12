import { createContext } from "react";
import { useState } from "react";

export const LoteryContext = createContext();

export default function LoteryProvider({ children }) {
  const [gameStep, setGameStep] = useState(0);

  return (
    <LoteryContext.Provider value={{ gameStep, setGameStep }}>
      {children}
    </LoteryContext.Provider>
  );
}
