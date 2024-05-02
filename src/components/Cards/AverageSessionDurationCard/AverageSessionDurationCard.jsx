import React, { useState, useEffect } from "react";
import "./AverageSessionDurationCard.css";

function AverageSessionDurationCard() {
  const [averageDuration, setAverageDuration] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/session/average-session-time")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => setAverageDuration(data.average_session_time_per_user)) // Set the average duration from the response
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="average-session-duration-card">
      <a className="average-session-duration-card-title">
        Duración Promedio de Sesión
      </a>
      {averageDuration && (
        <p className="average-session-duration-card-value">{averageDuration}</p>
      )}
    </div>
  );
}

export default AverageSessionDurationCard;
