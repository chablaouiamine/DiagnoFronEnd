import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [loginMessage, setLoginMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
   
    // Remplacez cette URL par l'URL de votre point d'API de connexion
    const apiUrl = "http://localhost:8092/users/login";

    axios
      .post(apiUrl, { email, password })
      .then((response) => {
        setLoginMessage(response.data.message);
        // Vous pouvez ajouter une logique pour gérer la connexion réussie, par exemple, rediriger vers un tableau de bord.
        navigate("/quiz");
      })
      .catch((error) => {
        setLoginMessage("Échec de la connexion. Veuillez vérifier votre email et votre mot de passe.");
        console.error("Échec de la connexion :", error);
      });
  };

  return (
    <div className="login-container">
        {/* Mettez votre image ici */}
        <div className="img-container">
          <img src="public/img/LOGIN.png" className="login-img" alt="Votre image" />
        </div>
        <div className="login-form">
        <form
          action=""
          onSubmit={handleFormSubmit}
        >
          <h2>LOGIN</h2>
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
              id="exampleInputEmail1"
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

          <button type="submit" className="btn btn-primary col-4">
            Envoyer
          </button>
          <div className="col-12 mb-3">
      <p>Already have an account?</p>
      
    </div>
        </form>
        {loginMessage && <p>{loginMessage}</p>}
      </div>
    </div>
  );
}
