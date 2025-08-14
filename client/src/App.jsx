// ? components
import Navbar from "./components/navbar/Navbar";
import Asidebar from "./components/asidebar/Asidebar";

//? view
import LandingPage from "./view/landingPage/LandingPage";
import Login from "./view/login/Login";
import SingUp from "./view/singUp/singUp"
import Home from "./view/home/Home";
import Tables from "./view/tables/Table";
import Pay from "./view/pay/Pay";
import Products from "./view/products/Products";
import Statistics from "./view/stathetics/Statistics";
import Settings from "./view/settings/Settings";


//? hook
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated]= useState(false)
  const [isRegistered, setIsRegistered]= useState(false)
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowLanding(false);
    }
  }, [location]);

  return (
    <>
      {!showLanding ? (
        isAuthenticated || isRegistered ? (
          <div className="app-container">
            <div className="sidebar">
              <Asidebar />
            </div>
            <div className="navbar">
              <Navbar className="w-full" />
            </div>
            <div className="content">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/table" element={<Tables />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/products" element={<Products />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/setting" element={<Settings />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/singUp"
              element={<SingUp setIsRegistered={setIsRegistered} />}
            />
          </Routes>
        )
      ) : (
        <Routes>
          <Route
            path="/"
            element={<LandingPage onEnter={() => navigate("/login")} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
