import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [registrationMessage, setRegistrationMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { username, email, password } = formData;

    // Remplacez cette URL par l'URL de votre point d'API d'inscription
    const apiUrl = "http://localhost:8092/users/add";

    axios
      .post(apiUrl, { username, email, password })
      .then((response) => {
        setRegistrationMessage(response.data.message);
      })
      .catch((error) => {
        setRegistrationMessage("L'inscription a échoué. Veuillez réessayer.");
        console.error("Échec de l'inscription :", error);
      });
      navigate("/users/login");
  };

  return (
    <div className="login-container">
  <div className="img-container">
    <img src="public/img/LOGIN.png" className="login-img" alt="Votre image" />
  </div>
  
  <div className="login-form">
    <form action="" className="" onSubmit={handleFormSubmit}>
          <h2>CREATE ACCOUNT</h2>
          <div className="col-12 mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">
              USERNAME
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputUsername"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

        <button type="submit" className="btn btn-primary col-12">
        Sign up
      </button>
      <div className="col-12 mb-3">
      <p>Already have an account?</p>
      <Link to="/login">LOGIN</Link> {/* Utilisez Link au lieu d'une balise 'a' normale */}
    </div>
    </form>
    
    {registrationMessage && <p>{registrationMessage}</p>}
    
    
  </div>
  </div>
);
}
