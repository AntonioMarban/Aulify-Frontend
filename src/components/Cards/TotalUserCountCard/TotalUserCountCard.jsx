import React, { useState, useEffect } from "react";
import "./TotalUserCountCard.css";

function TotalUserCountCard() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from localStorage
    if (!token) {
      console.error("Token not found");
      return;
    }

    fetch(import.meta.env.VITE_API + "/user/total-user-count", {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => setValue(data[0].total_user_count))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="total-user-count-card">
      <a className="total-user-count-card-title">Total de usuarios</a>
      {value && <p className="total-user-count-card-value">{value}</p>}
    </div>
  );
}

export default TotalUserCountCard;
