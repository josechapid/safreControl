import { useState } from "react";
import PropTypes from "prop-types"
import { useNavigate, Link } from "react-router-dom";
import "./singUp.css"

function SingUp ({setIsRegistered}){
    const [credentials, setCredentials]= useState({userName:"", lastName: "", email: "", password: "", repeatPassword: ""})
    const navigate = useNavigate()
    const handleSingUp = (e)=>{
        e.preventDefault()
        if(credentials.userName === "jose", credentials.lastName === "chapid", credentials.email === "xxx@xxx.com", credentials.password === "xxx", credentials.repeatPassword === "xxx"){
            setIsRegistered(true)
            navigate("/home")
        } else {
            alert("Registro incorrecto")
        }
    }
    return (
      <div className="singUp-container">
        <form onSubmit={handleSingUp} className="singUp">
          <p className="title">Registrarse</p>
          <div className="singUp-container-input">
            <label>Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="jose"
              className="singUp-input"
              value={credentials.userName}
              onChange={(e) =>
                setCredentials({ ...credentials, userName: e.target.value })
              }
            />
          </div>
          <div className="singUp-container-input">
            <label>Apellido</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="chapid"
              className="singUp-input"
              value={credentials.lastName}
              onChange={(e) =>
                setCredentials({ ...credentials, lastName: e.target.value })
              }
            />
          </div>
          <div className="singUp-container-input">
            <label>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="xxxxxxx@xxxx.com"
              className="singUp-input"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </div>
          <div className="singUp-container-input">
            <label>Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="************"
              className="singUp-input"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>
          <div className="singUp-container-input">
            <label>Repite la contraseña</label>
            <input
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              placeholder="**********"
              className="singUp-input"
              value={credentials.repeatPassword}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  repeatPassword: e.target.value,
                })
              }
            />
          </div>
          <button className="singUp-button" type="submit">
            Registrarse
          </button>
          <p className="parrafo-password">
            Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>{" "}
          </p>
        </form>
      </div>
    );
}
SingUp.propTypes = {
    setIsRegistered: PropTypes.func.isRequired,
}

export default SingUp