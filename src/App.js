// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import './App.css'; // aquí puedes importar los estilos si quieres

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
