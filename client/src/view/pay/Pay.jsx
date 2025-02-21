import { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import Icono_select from "../../assets/icons/icono_select.svg";
import PayIcon from "../../assets/icons/PayIcon.svg";

function Pay() {
  const [activeSection, setActiveSection] = useState(null);
  const [hour, setHour] = useState("");
  const [daily, setDaily] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [stateSell, setStateSell] = useState("");
  const [payments, setPayments] = useState("");
  const [table, setTable] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const handleVentasClick = () => {
    setShowDetails(true); // Show the details when the "Ventas" button is clicked
  };

  return (
    <div className="flex flex-col items-center p-6 text-left text-black bg-blue_grisaceo-50 min-h-screen ">
      {/*Franja superior*/}
      <div className="w-full bg-white p-3 text-lg font-bold">Pagos/Ventas</div>
      {/*Botones*/}
      <div className="w-full bg-white flex justify-left gap-4 py-3 my-5 p-3 rounded-lg">
        <button
          className={`px-4 py-2 rounded-lg transition-all ${
            activeSection === "ventas"
              ? "bg-black text-white"
              : "bg-white text-black border border-gray-400"
          }`}
          onClick={() => {
            setActiveSection("ventas");
            handleVentasClick();
          }}
        >
          Ventas
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-all ${
            activeSection === "movimientos"
              ? "bg-black text-white"
              : "bg-white text-black border border-gray-400"
          }`}
          onClick={() => setActiveSection("movimientos")}
        >
          Movimientos de Caja
        </button>
      </div>
      {/*Selects*/}
      <div className="w-full bg-blue_grisaceo-50 p-4 rounded-lg flex flex-wrap gap-4 justify-left">
        <div>
          <img className="w-10 h-10" src={Icono_select} alt="" />
        </div>
        <FormControl size="small" className="w-40">
          <InputLabel sx={{ color: "black" }}>Hora de Inicio</InputLabel>
          <Select
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            sx={{
              backgroundColor: "white",
              color: "black",
              "& .MuiSelect-icon": { color: "black" },
            }}
            label="Hora de Inicio"
          >
            <MenuItem value="08:00">08:00</MenuItem>
            <MenuItem value="12:00">12:00</MenuItem>
            <MenuItem value="16:00">16:00</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" className="w-40">
          <InputLabel sx={{ color: "black" }}>Diario</InputLabel>
          <Select
            value={daily}
            onChange={(e) => setDaily(e.target.value)}
            sx={{
              backgroundColor: "white",
              color: "black",
              "& .MuiSelect-icon": { color: "black" },
            }}
            label="Diario"
          >
            <MenuItem value="Lunes">Lunes</MenuItem>
            <MenuItem value="Martes">Martes</MenuItem>
            <MenuItem value="Miércoles">Miércoles</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" className="w-40">
          <InputLabel sx={{ color: "black" }}>Día</InputLabel>
          <Select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            sx={{
              backgroundColor: "white",
              color: "black",
              "& .MuiSelect-icon": { color: "black" },
            }}
            label="Día"
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="15">15</MenuItem>
            <MenuItem value="30">30</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" className="w-40">
          <InputLabel sx={{ color: "black" }}>Mes</InputLabel>
          <Select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            sx={{
              backgroundColor: "white",
              color: "black",
              "& .MuiSelect-icon": { color: "black" },
            }}
            label="Mes"
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="11">11</MenuItem>
            <MenuItem value="12">12</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" className="w-40">
          <InputLabel sx={{ color: "black" }}>Año</InputLabel>
          <Select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            sx={{
              backgroundColor: "white",
              color: "black",
              "& .MuiSelect-icon": { color: "black" },
            }}
            label="Año"
          >
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2025">2025</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="w-full bg-blue_grisaceo-50 p-4 rounded-lg flex flex-wrap gap-4 justify-left">
        <div>
          <img className="w-10 h-10" src={PayIcon} alt="" />
        </div>
        <FormControl size="small" className="w-40">
          <InputLabel sx={{ color: "black" }}>Estado de Venta</InputLabel>
          <Select
            value={stateSell}
            onChange={(e) => setStateSell(e.target.value)}
            sx={{
              backgroundColor: "white",
              color: "black",
              "& .MuiSelect-icon": { color: "black" },
            }}
            label="Estado de Venta"
          >
            <MenuItem value="Cerrado">Cerrado</MenuItem>
            <MenuItem value="Cancelado">Cancelado</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" className="w-40">
          <InputLabel sx={{ color: "black" }}>Medio de Pago</InputLabel>
          <Select
            value={payments}
            onChange={(e) => setPayments(e.target.value)}
            sx={{
              backgroundColor: "white",
              color: "black",
              "& .MuiSelect-icon": { color: "black" },
            }}
            label="Medio de pago"
          >
            <MenuItem value="Efectivo">Efectivo</MenuItem>
            <MenuItem value="Debito">Debito</MenuItem>
            <MenuItem value="Credito">Credito</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" className="w-40">
          <InputLabel sx={{ color: "black" }}>Mesa</InputLabel>
          <Select
            value={table}
            onChange={(e) => setTable(e.target.value)}
            sx={{
              backgroundColor: "white",
              color: "black",
              "& .MuiSelect-icon": { color: "black" },
            }}
            label="Mesa"
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10">10</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/*Contenido Dinamico*/}
      <div className="w-full p-5 bg-gray-800 rounded-lg">
        {activeSection === "ventas" && showDetails && (
          <div className="bg-white p-4 rounded-lg">
            {/* Franja */}
            <div className="flex space-x-10 justify-left mb-4">
              {/* Títulos arriba */}
              <div className="font-bold text-lg">Cod</div>
              <div className="font-bold text-lg">Estado</div>
              <div className="font-bold text-lg">Fecha</div>
              <div className="font-bold text-lg">Hora</div>
            </div>

            {/* Información debajo de cada título */}
            <div className="flex space-x-8 justify-left">
              <div className="text-xl">{table}</div>
              <div className="text-xl">{stateSell}</div>
              <div className="text-xl">{`${day} ${month} ${year}`}</div>
              <div className="text-xl">{hour}</div>
            </div>
          </div>
        )}

        {activeSection === "movimientos" && (
          <div>Contenido de Movimientos de Caja</div>
        )}
        {!activeSection && <div>Selecciona una opción</div>}
      </div>
    </div>
  );
}

export default Pay;
