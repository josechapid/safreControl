import safreImg from "../../assets/image/Sa-Fre.png";
import imgPerfil from "../../assets/image/fotoPerfil.png";
import iconArrow from "../../assets/icons/iconArrow.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={safreImg} alt="LogoSafre" />
      </div>

      <div className="navbar-user-section">
        <div className="navbar-user-info">
          <p>Nombre Apellido</p>
          <p>Admin</p>
        </div>
        <img className="navbar-user-img" src={imgPerfil} alt="imgPerfil" />
        <img className="navbar-arrow-icon" src={iconArrow} alt="arrow" />
      </div>
    </div>
  );
}

export default Navbar;
