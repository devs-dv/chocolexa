import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection"; // Capitalized component names are conventionally used for React components
import Products from "./components/Products"; // Assuming Products is a component in your project
import ReviewS from "./components/ReviewS"; // Capitalized component names are conventionally used for React components
import ContactUs from "./components/ContactUs"; // Capitalized component names are conventionally used for React components
import AboutUs from "./components/AboutUs"; // Capitalized component names are conventionally used for React components

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <HeroSection /> {/* Capitalize component name */}
        <Products /> {/* Assuming Products is a component */}
        <ReviewS /> {/* Capitalize component name */}
        <AboutUs /> {/* Capitalize component name */}
        <ContactUs /> {/* Capitalize component name */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
