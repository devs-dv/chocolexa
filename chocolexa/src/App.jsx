import React, { useState } from "react";
import "./App.css";

import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import Landing from "./Components/Landing";
import Review from "./Components/Review";
import ContactUs from "./Components/ContactUs";
import { BrowserRouter } from "react-router-dom";
import AboutS from "./Components/AboutS";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Landing />
        <Review />
        <Services />
        <AboutS />
        <ContactUs />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
