import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>a</div>} />
      {/* 👈 Renders at /localhost:3000/ */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
