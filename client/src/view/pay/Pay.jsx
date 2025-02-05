import { useState } from "react";

function Pay() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="flex flex-col items-center p-6 text-left text-black bg-gray-900 min-h-screen ">
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
