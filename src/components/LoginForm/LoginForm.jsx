import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const updateUserState = (evt) => {
    setUser(evt.target.value);
  };

  const updatePasswordState = (evt) => {
    setPassword(evt.target.value);
  };

  const login = async () => {
    const response = await fetch(import.meta.env.VITE_API + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        password: password,
      }),
    });

    const data = await response.json();
    if (data.token) {
      // Inicia sesión
      localStorage.setItem("token", data.token);
      // Make a request to check the role of the user
      const roleResponse = await fetch(
        import.meta.env.VITE_API + "/admin/role",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`, // Include the token in the request headers
          },
          body: JSON.stringify({ username: user }), // Send the username to check the role
        }
      );
      const roleData = await roleResponse.json();
      if (roleData.role) {
        // Save the role in localStorage
        localStorage.setItem("role", roleData.role);
      }
      // Redirect to the home page
      window.location.href = "/home";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-form-container">
      <form className="form">
        <div className="input-group">
          <input
            type="email"
            placeholder="Usuario"
            onChange={updateUserState}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Contraseña"
            onChange={updatePasswordState}
          />
        </div>
        <div className="button-container">
          <input type="button" value="Iniciar Sesión" onClick={login} />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
