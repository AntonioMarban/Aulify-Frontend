import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./UserAgeDistributionCard.css";

const UserAgeDistributionCard = () => {
  const [ageData, setAgeData] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/user/ages-distribution")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user age data");
        }
        return response.json();
      })
      .then((data) => {
        setAgeData(Object.entries(data));
      })
      .catch((error) => {
        console.error("Error fetching user age data:", error);
      });
  }, []);

  return (
    <div className="user-age-distribution-card">
      <a className="user-age-distribution-title">
        Distribución de edades en los usuarios
      </a>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={ageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="0" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="1" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserAgeDistributionCard;
