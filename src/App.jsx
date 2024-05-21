import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Visa from "../src/Visa";
import VisaDetails from "./VisaDetails";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="">
        <Router>
          {/* <Header /> */}

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/visa" element={<Visa />}></Route>
            <Route path="/visaDetails" element={<VisaDetails />}></Route>
          </Routes>
        </Router>

        <Footer />
      </div>
    </>
  );
}

export default App;
