import React from 'react'
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Products from "./components/Products"; // Assuming Products is a component in your project
import ReviewS from "./components/ReviewS"; // Capitalized component names are conventionally used for React components
import ContactUs from "./components/ContactUs"; // Capitalized component names are conventionally used for React components
import AboutUs from "./components/AboutUs";
import HeroSection from "./components/heroSection";
import MoreProducts from './components/MoreProducts';


const Home = () => {
  return (
    <>
      
      <HeroSection />
      {/* Capitalize component name */}
      <Products /> {/* Assuming Products is a component */}
      <MoreProducts />
      <ReviewS /> {/* Capitalize component name */}
      <AboutUs /> {/* Capitalize component name */}
      <ContactUs /> {/* Capitalize component name */}
      <Footer />
    </>
  );
}

export default Home