import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";
import Register from "./components/Register/Register";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Header /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
