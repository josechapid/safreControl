import PropTypes from "prop-types";
import pizza from "../../assets/image/pizza.jpeg";
import "./LandingPage.css";

function LandingPage({ onEnter }) {
  return (
    <div className="landing-container">
      <img src={pizza} alt="pizza" className="background-image" />

      <div className="overlay">
        <h1 className="title">Bienvenido</h1>
        <button className="enter-button" onClick={onEnter}>
          Entrar
        </button>
      </div>
    </div>
  );
}

LandingPage.propTypes = {
  onEnter: PropTypes.func.isRequired,
};

export default LandingPage;
