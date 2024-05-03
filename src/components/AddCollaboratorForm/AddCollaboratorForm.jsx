import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddCollaboratorForm.css";

function AddCollaboratorForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("regular");
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const updateEmailState = (evt) => {
    setEmail(evt.target.value);
  };

  const updatePasswordState = (evt) => {
    setPassword(evt.target.value);
  };

  const updateRoleState = (evt) => {
    setRole(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = {
      username: email, // Assuming email is used as the username
      password: password,
      role: role
    };
    try {
      const response = await fetch(import.meta.env.VITE_API + '/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to add admin');
      }
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Assuming form submission is successful
      setSubmitted(true);
    } catch (error) {
      console.error('Error adding admin:', error);
      // Handle error here
    }
  };

  return (
    <div className="collaborator-form-container">
      {!submitted ? (
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="email" placeholder="Usuario" value={email} onChange={updateEmailState} required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Contraseña" value={password} onChange={updatePasswordState} required />
          </div>
          <div className="input-group">
            <select value={role} onChange={updateRoleState}>
              <option value="regular">Regular</option>
              <option value="master">Master</option>
            </select>
          </div>
          <div className="button-container">
            <input type="submit" value="Agregar" />
          </div>
        </form>
      ) : (
        <div className="success-message">
          <Link to="/home">
            <button className="home-button">Volver al Inicio</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default AddCollaboratorForm;
