import { useState } from "react";
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";

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

  return(
    <div className="login-container">
    <h2>Iniciar Sesion</h2>
    <form onSubmit={handleLogin}>
      <input type="text"
      placeholder="Usuario"
      value={credentials.username}
      onChange={(e)=> setCredentials({...credentials, username: e.target.value})}
      />
      <input type="password"
      placeholder="Contraseña"
      value={credentials.password}
      onChange={(e)=> setCredentials({...credentials, password: e.target.value})}
      />
      <button type="submit">Ingresar</button>
    </form>
    </div>
  ) 
}
Login.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired, 
};
export default Login;
