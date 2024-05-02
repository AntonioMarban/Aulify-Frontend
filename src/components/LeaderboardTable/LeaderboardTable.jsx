import React, { useState, useEffect } from "react";
import "./LeaderboardTable.css";

function LeaderboardTable() {
  const [userData, setUserData] = useState([]);
  const [sortBy, setSortBy] = useState({ field: null, ascending: true });

  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/user/leaderboard")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener datos de usuario");
        }
        return response.json();
      })
      .then((data) => {
        // Sort the data initially by timePlayed
        const sortedData = [...data].sort(
          (a, b) => b.timePlayed - a.timePlayed
        );
        setUserData(
          sortedData.map((user, index) => ({ ...user, puesto: index + 1 }))
        );
      })
      .catch((error) => {
        console.error("Error al obtener datos de usuario:", error);
      });
  }, []);

  const handleSort = (field) => {
    if (sortBy.field === field) {
      setSortBy({ ...sortBy, ascending: !sortBy.ascending });
    } else {
      setSortBy({ field, ascending: true });
    }
  };

  const sortedUserData = [...userData].sort((a, b) => {
    const fieldA = a[sortBy.field];
    const fieldB = b[sortBy.field];
    if (fieldA < fieldB) {
      return sortBy.ascending ? -1 : 1;
    }
    if (fieldA > fieldB) {
      return sortBy.ascending ? 1 : -1;
    }
    return 0;
  });

  const isSortingByField = (field) => sortBy.field === field;

  const getHeaderStyle = (field) => {
    if (isSortingByField(field)) {
      return { backgroundColor: "#333", color: "#fff" };
    }
    return {};
  };

  return (
    <div className="tabla-ranking">
      <h2 className="titulo-tabla">Tabla de Posiciones</h2>
      <table className="tabla-leaderboard">
        <thead>
          <tr>
            <th
              onClick={() => handleSort("puesto")}
              style={getHeaderStyle("puesto")}
            >
              Puesto
            </th>
            <th
              onClick={() => handleSort("username")}
              style={getHeaderStyle("username")}
            >
              Nombre de usuario
            </th>
            <th onClick={() => handleSort("age")} style={getHeaderStyle("age")}>
              Edad
            </th>
            <th
              onClick={() => handleSort("timePlayed")}
              style={getHeaderStyle("timePlayed")}
            >
              Tiempo Jugado
            </th>
            <th
              onClick={() => handleSort("isAulifyUser")}
              style={getHeaderStyle("isAulifyUser")}
            >
              Usuario Aulify
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUserData.map((user) => (
            <tr key={user.idUser}>
              <td>{user.puesto}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>{user.timePlayed}</td>
              <td>{user.isAulifyUser ? "Sí" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderboardTable;
