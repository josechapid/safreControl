import { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import Icono_select from "../../assets/icons/icono_select.svg";

function Pay() {
  const [activeSection, setActiveSection] = useState(null);
  const [hour, setHour] = useState("");
  const [daily, setDaily] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

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
          onClick={() => setActiveSection("ventas")}
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
      <div className="w-full bg-blue_grisaceo-50 p-4 rounded-lg flex flex-wrap gap-4 justify-center">
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
            <MenuItem value="Enero">Enero</MenuItem>
            <MenuItem value="Febrero">Febrero</MenuItem>
            <MenuItem value="Marzo">Marzo</MenuItem>
            <MenuItem value="Abril">Abril</MenuItem>
            <MenuItem value="Mayo">Mayo</MenuItem>
            <MenuItem value="Junio">Junio</MenuItem>
            <MenuItem value="Julio">Julio</MenuItem>
            <MenuItem value="Agosto">Agosto</MenuItem>
            <MenuItem value="Septiembre">Septiembre</MenuItem>
            <MenuItem value="Octubre">Octubre</MenuItem>
            <MenuItem value="Noviembre">Noviembre</MenuItem>
            <MenuItem value="Diciembre">Diciembre</MenuItem>
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

      {/*Contenido Dinamico*/}
      <div className="w-full p-5 bg-gray-800 rounded-lg">
        {activeSection === "ventas" && <div>Contenido de Ventas</div>}
        {activeSection === "movimientos" && (
          <div>Contenido de Movimientos de Caja</div>
        )}
        {!activeSection && <div>Selecciona una opción</div>}
      </div>
    </div>
  );
}

export default Pay;
