import safreImg from "../../assets/image/Sa-Fre.png";
import imgPerfil from "../../assets/image/fotoPerfil.png";
import iconArrow from "../../assets/icons/iconArrow.png";

function Navbar() {
  return (
    <div className="text-white flex justify-between p-5">
      <div>
        <img src={safreImg} alt="LogoSafre" />
      </div>
      <div className="flex border-l border-white gap-5 items-center ">
        <div className="flex-col pl-5">
          <p>Nombre Apellido</p>
          <p className="text-right">Admin</p>
        </div>
        <img src={imgPerfil} alt="imgPerfil" />
        <img className="w-5 h-5" src={iconArrow} alt="arrow" />
      </div>
    </div>
  );
}

export default Navbar;
