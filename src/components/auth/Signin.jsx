import React, { useState } from "react";
import Cookies from "js-cookie";
import "./signin.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mockUser = {
      phone: "123456789",
      password: "password123",
      token: "mock-token-123",
    };

    if (
      formData.phone === mockUser.phone &&
      formData.password === mockUser.password
    ) {
      Cookies.set("authToken", mockUser.token, { expires: 1 });
      alert("Login successful!");
      window.location.href = "/form";
    } else {
      setErrorMessage("Invalid phone number or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
