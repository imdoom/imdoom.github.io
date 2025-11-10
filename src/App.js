import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Password from "./components/password";
import MemorySequence from "./components/memorySequence";
import ClickSpeed from "./components/clickSpeed";

function App() {
  return (
    <div class="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<Password />} />
        <Route path="/memory" element={<MemorySequence />} />
        <Route path="/clickspeed" element={<ClickSpeed />} />
      </Routes>
    </div>
  );
}

export default App;
