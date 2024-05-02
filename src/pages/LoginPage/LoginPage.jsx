import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css"; // Import the CSS file
import logoAulify from "../../assets/logoAulify1.png"; // Import the image

function LoginPage() {
  return (
    <div className="login-page">
      <img src={logoAulify} alt="Logo" className="logo" />
      <div className="form-container">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
