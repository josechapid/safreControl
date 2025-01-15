import safreLogo from "../../assets/image/safreLogo.png";
import Home from "../../assets/icons/home.svg";
import Table from "../../assets/icons/table.svg";
import Statistics from "../../assets/icons/statistics.svg";
import Cards from "../../assets/icons/cards.svg";
import Pay from "../../assets/icons/pay.svg";
import Setting from "../../assets/icons/setting.svg";

function Asidebar() {
  return (
    <div className="flex flex-col gap-5 max-w-14 items-center">
      <div>
        <img className="w-12 h-12" src={safreLogo} alt="" />
      </div>
      <div className="mt-5 flex flex-col space-y-5">
        <img className="w-10 h-10" src={Home} alt="" />
        <img className="w-10 h-10" src={Table} alt="" />
        <img className="w-10 h-10" src={Cards} alt="" />
        <img className="w-10 h-10" src={Pay} alt="" />
        <img className="w-10 h-10" src={Statistics} alt="" />
        <img className="w-10 h-10" src={Setting} alt="" />
      </div>
    </div>
  );
}

export default Asidebar;
