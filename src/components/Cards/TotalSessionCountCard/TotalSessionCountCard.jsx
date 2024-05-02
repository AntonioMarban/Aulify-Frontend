import React, { useState, useEffect } from "react";
import "./TotalSessionCountCard.css";

function TotalSessionCountCard() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/session/total-session-count")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => setValue(data[0].total_session_count))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="total-session-count-card">
      <a className="total-session-count-card-title">Total de sesiones</a>
      {value && <p className="total-session-count-card-value">{value}</p>}
    </div>
  );
}

export default TotalSessionCountCard;
