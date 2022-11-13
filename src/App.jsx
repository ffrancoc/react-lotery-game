import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GameScreen from "./components/GameScreen";
import SelectionScreen from "./components/SelectionScreen";
import StartScreen from "./components/StartScreen";
import LoteryProvider from "./provider/LoteryProvider";

function App() {
  return (
    <LoteryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/selection" element={<SelectionScreen />} />
          <Route path="/game" element={<GameScreen />} />
        </Routes>
      </BrowserRouter>
    </LoteryProvider>
  );
}

export default App;
