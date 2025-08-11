import "./Home.css";
import loro from "../../assets/image/imagen-vectorial.jpg";
function Home() {
  return (
    <div>
      <header className="header">
        <h1 className="title-header">Mesas</h1>
      </header>
      <main className="main-container">
        <section className="main-section">
          <img src={loro} alt="" className="home-image" />
        </section>
        <aside className="aside-container">
          <div className="aside-title">
            <h1>Mesa</h1>
          </div>
          <div className="aside-labels">
            <label htmlFor="waiter">
              Mesero/a:
              <select id="waiter" name="waiter">
                <option value="jose">Jose</option>
                <option value="andrea">Andrea</option>
                <option value="omaira">Omaira</option>
              </select>{" "}
            </label>

            <label htmlFor="people">
              No. personas:
              <select id="people" name="people">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
          </div>
          <div className="aside-buttons">
            <button>Nueva Orden</button>
            <button>Abrir Mesa</button>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Home;
