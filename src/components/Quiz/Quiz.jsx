import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Quiz({ onSubmit }) {
  const [categories, setCategories] = useState([]);
  const [choices, setChoices] = useState([]);
  const [response, setResponse] = useState([]);
  const [formData, setFormData] = useState({
    choiceId: "",
    questionId: "",
    userId: "1",
  });
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
      onSubmit();
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div>
      <h1>{currentCategory?.libelle}</h1>
      <p>{currentQuestion?.description}</p>
      {choices.map((choice) => (
        <div className="form-check" key={choice.id}>
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              name="choiceId"
              value={choice.id}
              onChange={handleInputChange}
            />
            {choice.description}
          </label>
        </div>
      ))}
      <button type="button" onClick={handleNextQuestion}>
        Next
      </button>
      <button type="submit" onClick={handleFormSubmit}>
        Submit
      </button>
    </div>
  );
}
