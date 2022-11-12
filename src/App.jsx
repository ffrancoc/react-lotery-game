import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import StartScreen from "./components/StartScreen";
import LoteryProvider from "./provider/LoteryProvider";

function App() {
  return (
    <LoteryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen />} />
        </Routes>
      </BrowserRouter>
    </LoteryProvider>
  );
}

export default App;
