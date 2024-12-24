import React, { useState } from "react";
import Cookies from "js-cookie";
import "./signin.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    firstName: "",
    lastName:""
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
      alert("signup successful!");
      window.location.href = "/form";
    } else {
      setErrorMessage("Invalid phone number or password");
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Phone</label>
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
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
