import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Password from "./components/password";
import MemorySequence from "./components/memorySequence";
import ClickSpeed from "./components/clickSpeed";
import Projects from "./components/Projects";
import TicTacToe from "./components/tictactoe";
import FlappyBird from "./components/flappybird";
import GuessTheNumber from "./components/guessTheNumber";
import WhackAMole from "./components/whackamole";
import ReactionTime from "./components/reactionTime";
import Game2048 from "./components/2048";

function App() {
  return (
    <div class="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<Password />} />
        <Route path="/memory" element={<MemorySequence />} />
        <Route path="/clickspeed" element={<ClickSpeed />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/flappybird" element={<FlappyBird />} />
        <Route path="/guessthenumber" element={<GuessTheNumber />} />
        <Route path="/whackamole" element={<WhackAMole />} />
        <Route path="/reactiontime" element={<ReactionTime />} />
        <Route path="/2048" element={<Game2048 />} />
      </Routes>
    </div>
  );
}

export default App;
