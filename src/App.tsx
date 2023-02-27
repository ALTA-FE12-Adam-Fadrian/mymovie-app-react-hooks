import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
function App() {
  const [isDark, setIsdark] = useState(false);

  function darkMode() {
    setIsdark(!isDark);
  }
  return (
    <>
    <div className="bg-white dark:bg-slate-600 ">
      <BrowserRouter>
        <Navbar handleType={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:movieId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
