import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoAulify from "../../assets/logoAulify2.png";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleAddCollaboratorNavigation = () => {
    navigate("/add-collaborator");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const handleHome = () => {
    navigate("/home");
  };

  const handleLeaderboard = () => {
    navigate("/leaderboard");
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/home">
          <img src={logoAulify} alt="Aulify Logo" className="logo" />
        </Link>
      </div>
      <div className="buttons-container">
        <button onClick={handleHome} className="home-button">
          Inicio
        </button>
        <button onClick={handleLeaderboard} className="home-button">
          Ranking
        </button>
        {role === "master" && (
          <button
            onClick={handleAddCollaboratorNavigation}
            className="home-button"
          >
            Agregar Colaborador
          </button>
        )}
        <button onClick={handleLogout} className="home-button">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

export default Navbar;
