import { Link } from "react-router-dom";
import safreLogo from "../../assets/image/safreLogo.png";
import Home from "../../assets/icons/home.svg";
import Table from "../../assets/icons/table.svg";
import Statistics from "../../assets/icons/statistics.svg";
import Cards from "../../assets/icons/cards.svg";
import Pay from "../../assets/icons/pay.svg";
import Setting from "../../assets/icons/setting.svg";
import "./Asidebar.css";

function Asidebar() {
  return (
    <div className="asidebar">
      <div className="asidebar-logo">
        <img src={safreLogo} alt="Logo" />
      </div>
      <div className="asidebar-menu">
        <Link to="/home">
          <img src={Home} alt="Home" />
        </Link>
        <Link to="Table">
          <img src={Table} alt="Table" />
        </Link>
        <Link to="/Cards">
          {" "}
          <img src={Cards} alt="Cards" />
        </Link>

        <Link to="/pay">
          <img src={Pay} alt="Pay" />
        </Link>
        <Link to="/Statistics">
        <img src={Statistics} alt="Statistics" />
        </Link>
        <Link to="/Setting">
        <img src={Setting} alt="Setting" />
        </Link>
      </div>
    </div>
  );
}

export default Asidebar;
