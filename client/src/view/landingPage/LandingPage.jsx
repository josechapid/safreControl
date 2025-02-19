import PropTypes from "prop-types";
import pizza from "../../assets/image/pizza.jpeg";

function LandingPage({ onEnter }) {
  return (
    <div className="relative w-full h-screen">
      <img
        src={pizza}
        alt="pizza"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl font-bold mb-4">Bienvenido</h1>
        <button
          className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-lg font-semibold"
          onClick={onEnter}
        >
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
