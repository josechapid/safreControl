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
        <div className="grid grid-cols-[70px_1fr] grid-rows-[60px_1fr] h-screen">
          <div className="row-span-2 bg-gray-900 text-white">
            <Asidebar />
          </div>
          <div className="bg-gray-800 text-white px-4 h-30 flex justify-center items-center w-full">
            <Navbar  className="w-full"/>
          </div>
          <div className="p-4 bg-gray-100 overflow-auto">
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