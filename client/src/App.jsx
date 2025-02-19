// ? components
import Navbar from "./components/navbar/Navbar";
import Asidebar from "./components/asidebar/Asidebar";

//? view
import Home from "./view/home/Home";
import LandingPage from "./view/landingPage/LandingPage";
import Login from "./view/login/Login";
import Pay from "./view/pay/Pay";

//? hook
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Asidebar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </>
  );
}

export default App;
