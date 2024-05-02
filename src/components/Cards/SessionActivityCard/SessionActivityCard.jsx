import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./SessionActivityCard.css";

const SessionActivityChart = () => {
  const [sessionData, setSessionData] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const day = date.getDate();
    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
        ? "nd"
        : day === 3 || day === 23
        ? "rd"
        : "th";
    return formattedDate + suffix;
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/session/session-count-last-7-days")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch session data");
        }
        return response.json();
      })
      .then((data) => {
        const formattedData = data.map((entry) => ({
          ...entry,
          sessionDate: formatDate(entry.sessionDate),
        }));
        setSessionData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching session data:", error);
      });
  }, []);

  return (
    <div className="session-activity-chart">
      <h2 className="chart-title">Total de sesiones en la última semana</h2>
      <style>{`
        .recharts-cartesian-axis-tick-value {
          font-size: 12px; /* Adjust font size here */
        }
      `}</style>
      <LineChart width={600} height={300} data={sessionData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sessionDate" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="session_count"
          stroke="#0053b1"
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
};

export default SessionActivityChart;
