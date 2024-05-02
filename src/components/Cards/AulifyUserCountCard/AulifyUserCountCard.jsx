import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "./AulifyUserCountCard.css"; // Make sure to import the CSS file

const AulifyUserCountCard = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/user/aulify-user-count")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const COLORS = ["#D44D56", "#0053B1"]; // Colors for Aulify and non-Aulify users

  return (
    <div className="aulify-user-count-card">
      <a className="aulify-user-count-title">Porcentaje de Usuarios de Aulify</a>
      <PieChart width={250} height={250}>
        <Pie
          dataKey="value"
          data={[
            { name: "Aulify Users", value: userData.aulifyUsers || 0 },
            { name: "Non-Aulify Users", value: userData.notAulifyUsers || 0 }
          ]}
          cx="50%"
          cy="50%"
          outerRadius={70}
          fill="#8884d8"
          label
        >
          {userData && Object.keys(userData).length !== 0 && COLORS.map((color, index) => (
            <Cell key={`cell-${index}`} fill={color} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default AulifyUserCountCard;
