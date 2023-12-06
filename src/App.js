import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 👈 Renders at /localhost:3000/ */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
