import React from "react";
import HeroBanner from "./components/hero/HeroBanner";
import Navbar from "./components/navbar/Navbar";
import bg from "./assets/bg.png"; // Import the background image

// Define the bgStyles variable
const bgStyles = {
  backgroundImage: `url(${bg})`, // Set the background image using the imported bg
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: "0.2", // Set the opacity only for the background image
};

import Footer from "./components/footer/Footer";
import Testimony from "./components/testimony/Testimony";
import "./App.css";
import Features from "./components/featured/Features";
import LiveScore from "./components/livescore/LiveScore";

function App() {
  return (
    <>
      {/* Background Image Div */}
      <div className="absolute inset-0 -z-10 bg-black" style={bgStyles} />

      {/* Content */}
      <Navbar />
      <HeroBanner />
      <LiveScore />
      <Features />
      <Testimony />
      <Footer />
    </>
  );
}

export default App;
