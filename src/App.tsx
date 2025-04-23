import { BrowserRouter, Route, Routes } from "react-router-dom";
import DiceGame from "./components/DiceGame";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diceGame" element={<DiceGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
