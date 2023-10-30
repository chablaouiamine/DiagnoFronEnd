import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [registrationMessage, setRegistrationMessage] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { username, email, password } = formData;

    // Replace this URL with your registration API endpoint
    const apiUrl = "http://localhost:8092/users/add";

    axios
      .post(apiUrl, { username, email, password })
      .then((response) => {
        setRegistrationMessage(response.data.message);
      })
      .catch((error) => {
        setRegistrationMessage("Registration failed. Please try again.");
        console.error("Registration failed:", error);
      });
  };

  return (
    <div>
      <form
        action=""
        className="d-flex flex-column align-items-center"
        onSubmit={handleFormSubmit}
      >
        <h2>Register Now</h2>
        <div className="col-4 mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">
            Username
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
        <div className="col-4 mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email address
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

        <div className="col-4 mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
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
          Submit
        </button>
      </form>
      {registrationMessage && <p>{registrationMessage}</p>}
    </div>
  );
}
