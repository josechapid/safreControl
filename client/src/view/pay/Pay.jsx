import { useState } from "react";
import "./Pay.css";
import loro from "../../assets/image/imagen-vectorial.jpg";

function Pay() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="pay-container">
      {/* Franja superior */}
      <header className="pay-header">
        <h1>Pagos/Ventas</h1>
      </header>

      <div className="pay-main">
        {/* Lado izquierdo */}
        <div className="pay-left">
          <nav className="pay-nav">
            <button
              className={`pay-btn ${
                activeSection === "ventas" ? "active" : ""
              }`}
              onClick={() => setActiveSection("ventas")}
            >
              Ventas
            </button>
            <button
              className={`pay-btn ${
                activeSection === "movimientos" ? "active" : ""
              }`}
              onClick={() => setActiveSection("movimientos")}
            >
              Movimientos de Caja
            </button>
          </nav>

          <main className="pay-content">
            {activeSection === "ventas" && (
              <section>Contenido de Ventas</section>
            )}
            {activeSection === "movimientos" && (
              <section>Contenido de Movimientos de Caja</section>
            )}
            {!activeSection && <section>Selecciona una opción</section>}
          </main>
        </div>

        {/* Lado derecho */}
        <div className="pay-right">
          <img src={loro} alt="" className="home-image" />
        </div>
      </div>
    </div>
  );
}

export default Pay;
