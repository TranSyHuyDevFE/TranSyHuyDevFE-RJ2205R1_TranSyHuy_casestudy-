import { MainPage } from "./pages/MainPage";
import NavBar from "./pages/NavBar";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/start" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
