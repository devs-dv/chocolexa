import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Products from "./components/Products"; // Assuming Products is a component in your project
import ReviewS from "./components/ReviewS"; // Capitalized component names are conventionally used for React components
import ContactUs from "./components/ContactUs"; // Capitalized component names are conventionally used for React components
import AboutUs from "./components/AboutUs"; // Capitalized component names are conventionally used for React components
import bg from "./assets/bg.jpg";
import HeroSection from "./components/heroSection";
import SpecProduct from "./components/SpecProduct";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Products" element={<SpecProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
