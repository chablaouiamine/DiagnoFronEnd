import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

    // Replace this URL with your login API endpoint
    const apiUrl = "http://localhost:8092/users/login";

    axios
      .post(apiUrl, { email, password })
      .then((response) => {
        setLoginMessage(response.data.message);
        // You can add logic to handle successful login, e.g., redirect to a dashboard.
        navigate("/");
      })
      .catch((error) => {
        setLoginMessage("Login failed. Please check your email and password.");
        console.error("Login failed:", error);
      });
  };
  return (
    <div>
      <form
        action=""
        className="d-flex flex-column align-items-center"
        onSubmit={handleFormSubmit}
      >
        <h2>Login Now</h2>
        <div className="col-4 mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
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
      {/* {loginMessage && <p>{loginMessage}</p>} */}
    </div>
  );
}
