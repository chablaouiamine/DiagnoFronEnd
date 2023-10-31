import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";
import Register from "./components/Register/Register";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import DiagnosticsList from "./components/DiagnosticsList";
import CategorieList from "./components/CategorieList";
import ProgressBar from "./components/ProgressBar";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/" element={<Home />} />
          <Route path="/diagno" element={<DiagnosticsList />} />
          <Route path="/categories/list" element={<CategorieList />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
