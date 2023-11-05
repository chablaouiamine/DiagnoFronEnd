import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './quiz.css';

export default function Quiz() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [choices, setChoices] = useState([]);
  const [response, setResponse] = useState([]);
  const [formData, setFormData] = useState({
    choiceId: "",
    questionId: "",
    userId: "1",
  });
  const [buttonToDisplay, setButtonToDisplay] = useState("Submit");

  const categoriesListAPI = "http://localhost:8092/categories/list";
  const choicesListAPI = "http://localhost:8092/choices/list";
  const postAPI = "http://localhost:8092/Responses/add";
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentCategory = categories[currentCategoryIndex];
  const currentQuestion = currentCategory?.quest[currentQuestionIndex];

  useEffect(() => {
    // Fetch categories from the API
    async function fetchCategories() {
      const response = await axios.get(categoriesListAPI);
      const data = response.data;
      setCategories(data);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    // Fetch choices from the API
    async function fetchChoices() {
      const response = await axios.get(choicesListAPI);
      const data = response.data;
      setChoices(data);
    }
    fetchChoices();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentCategory.quest.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentCategoryIndex < categories.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      handleFormSubmit(); // Submit the form internally
    }
    setButtonToDisplay("Submit");
    // setFormSubmitted(false);
    // setShowSubmitButton(true);
  };

  const clearChoiceId = () => {
    setFormData({ ...formData, choiceId: "" });
  };


  const handleFormSubmit = async () => {
    try {
      const { choiceId } = formData;
      const questionId = currentQuestion?.id.toString();
      const userId = "1";
      const response = await axios.post(postAPI, {
        choiceId,
        questionId,
        userId,
      });
      setResponse(response.data);
      setButtonToDisplay("Next");
      // setFormSubmitted(true);
      // setShowSubmitButton(false);
      if (currentCategoryIndex === categories.length - 1 && currentQuestionIndex === currentCategory.quest.length - 1) {
        // If this is the last question and category, navigate to another page
        navigate('/'); // Replace '/another-page' with the URL you want to navigate to
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-start">
        <h1>{currentCategory?.libelle}</h1>
      </div>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h2>{currentQuestion?.description}</h2>
        <div className="d-flex flex-column mb-3 radio-list">
          {choices.map((choice) => (
            <div
              // className="form-check radio-item" 
              className="radio-item" 
              key={choice.id}>

              <input
                // className="form-check-input"
                type="radio"
                name="choiceId"
                value={choice.id}
                onChange={handleInputChange}
                id={choice.id}
              />
              <label
                // className="form-check-label"
                htmlFor={choice.id}
                style={{ fontSize: "18px", fontWeight: "500" }}
              >
                {choice.description}
              </label>
            </div>
          ))}
        </div>
        <div className="d-flex space-between ">
          {buttonToDisplay == "Next" ? (
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          ) : null}
          {buttonToDisplay == "Submit" ? (
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleFormSubmit}
              style={{ marginLeft: "3px" }}
            >
              Submit
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
