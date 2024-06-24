import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Password from "./components/password";

function App() {
  return (
    <div class="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </div>
  );
}

export default App;
