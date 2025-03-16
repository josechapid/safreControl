// ? components
import Navbar from "./components/navbar/Navbar";
import Asidebar from "./components/asidebar/Asidebar";

//? view
import Home from "./view/home/Home";
import LandingPage from "./view/landingPage/LandingPage";
import Login from "./view/login/Login";
import Pay from "./view/pay/Pay";

//? hook
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowLanding(false);
    }
  }, [location]);

  return (
    <>
      {!showLanding ? (
        <div className="app-container">
          <div className="sidebar">
            <Asidebar />
          </div>
          <div className="navbar">
            <Navbar className="w-full" />
          </div>
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={<LandingPage onEnter={() => navigate("/home")} />}
              />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/pay" element={<Pay />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<LandingPage onEnter={() => navigate("/home")} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
