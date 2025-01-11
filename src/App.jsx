import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/display/Home/Home";
import Footer from "./components/Footer/footer";
import PopupBasket1 from "./components/popupBasket/popupBasket1.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Link } from "react-router-dom";
 

function App() {
  return (
    <>
      {/* <Header />
      <div div className="main-container" style={{ paddingTop: "100px" }}>
        <section id="Home">
         <Home /> 
        </section>
      </div>
      <Footer /> */}
     <PopupBasket1/>

    </>
  );
}

export default App;
