import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Carousel />
      <About />
      <Services />
      <Footer />
    </>
  );
}

export default App;
