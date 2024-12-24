import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import FormComponent from './components/FormComponent';
import LoginForm from './components/auth/Signin';
import SignupForm from './components/auth/SignUp';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/form" element={<FormComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
