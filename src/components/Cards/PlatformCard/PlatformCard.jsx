import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "./PlatformCard.css";

const PlatformCard = () => {
  const [sessionData, setSessionData] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/session/session-count-per-platform")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch session data");
        }
        return response.json();
      })
      .then((data) => {
        // Process the fetched data and update state
        setSessionData(data);
      })
      .catch((error) => {
        console.error("Error fetching session data:", error);
      });
  }, []);

  const COLORS = ["#D44D56", "#0053B1", "#F6BA27"];

  return (
    <div className="platform-card">
      <a className="platform-card-title">Sessions Per Platform</a>
      <PieChart width={250} height={250}>
        <Pie
          dataKey="session_count"
          data={sessionData}
          cx="50%"
          cy="50%"
          outerRadius={70}
        >
          {sessionData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          formatter={(value, entry, index) => `${entry.payload.platform}`}
        />
      </PieChart>
    </div>
  );
};

export default PlatformCard;
