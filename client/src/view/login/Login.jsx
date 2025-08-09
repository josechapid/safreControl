import { useState } from "react";
import PropTypes from "prop-types"
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"

function Login({setIsAuthenticated}) {
  const [credentials, setCredentials]= useState({username: "", password: ""})
  const navigate = useNavigate()

  const handleLogin = (e) =>{
    e.preventDefault()
    if(credentials.username === "admin" && credentials.password === "1234"){
      setIsAuthenticated(true);
      navigate("/home")
    } else {
      alert("Credenciales incorrectas")
    }
  }
  
  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login">
        <p className="title">Iniciar Sesión</p>

        <div className="login-container-input">
          <label htmlFor="name">Usuario o Email:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Usuario"
            className="login-input"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </div>
        <div className="login-container-input">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            className="login-input"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>

        <p className="parrafo-password">¿Olvidaste tu contraseña?</p>
        <button className="login-button" type="submit">Ingresar</button>
        <p>¿No tienes cuenta? Registrate <Link to="/singUp">Aquí</Link></p>
      </form>
    </div>
  ); 
}
Login.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired, 
};
export default Login;
