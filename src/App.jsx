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
  const [userId, setUserId] = useState("");
  const [categories, setCategories] = useState([]);
  const [scores, setScores] = useState({});
  const [questions, setQuestions] = useState({});
  const [choices, setChoices] = useState({});

  useEffect(() => {
    // Fetch categories from API
    fetch("http://localhost:8092/categories/list")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const fetchQuestionsAndChoices = (categoryId) => {
    // Fetch questions for a specific category
    fetch(`http://localhost:8092/Questions/byCategory/{{categoryId}}`)
      .then((response) => response.json())
      .then((questionsData) => {
        setQuestions((prevState) => ({
          ...prevState,
          [categoryId]: questionsData,
        }));

        // Fetch choices for each question in the category
        questionsData.forEach((question) => {
          fetch(`http://localhost:8092/choices/list`)
            .then((response) => response.json())
            .then((choicesData) => {
              setChoices((prevState) => ({
                ...prevState,
                [question.id]: choicesData,
              }));
            })
            .catch((error) => console.error("Error fetching choices:", error));
        });
      })
      .catch((error) => console.error("Error fetching questions:", error));
  };

  // Utilisation de useEffect pour récupérer les scores pour chaque catégorie
  // useEffect(() => {
  //   categories.forEach((category) => {
  //     // Utilisez l'ID de l'utilisateur stocké dans l'état pour personnaliser la requête fetch
  //     fetch(`http://localhost:8092/Responses/scoreByCategory_global/1`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Mise à jour des scores dans l'état local en utilisant le spread operator (...) pour préserver les scores existants
  //         setScores((prevScores) => ({
  //           ...prevScores,
  //           [category]: data.score,
  //         }));
  //       })
  //       .catch((error) =>
  //         console.error(`Error fetching score for category ${category}:`, error)
  //       );
  //   });
  // }, [categories, userId]);

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
      {/* <div>
        <h1>Progress Bars for Categories</h1>
        {categories.map((category) => (
          <ProgressBar
            key={category.id}
            category={category}
            score={scores[category] || 0}
          />
          // Utilisation de `scores[category] || 0` pour gérer le cas où le score n'est pas encore récupéré (par défaut à 0)
        ))}
      </div> */}
      <div>
        <h1>Categories</h1>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              {category.name}
              <button onClick={() => fetchQuestionsAndChoices(category.id)}>
                Load Questions
              </button>
              <ul>
                {questions[category.id] &&
                  questions[category.id].map((question) => (
                    <li key={question.id}>
                      {question.text}
                      <ul>
                        {choices[question.id] &&
                          choices[question.id].map((choice) => (
                            <li key={choice.id}>
                              <input
                                type="radio"
                                name={`question_${question.id}`}
                                value={choice.id}
                              />
                              {choice.text}
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
