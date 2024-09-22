
import React from "react";
import HeroBanner from "./components/hero/HeroBanner";
import Navbar from "./components/navbar/Navbar";
import bg from "./assets/bg.png"; // Import the background image
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import SchedulePage from "./pages/SchedulePage";
import NewsPage from "./pages/NewsPage";
import TicketsPage from "./pages/TicketsPage";

// Define the bgStyles variable
const bgStyles = {
  backgroundImage: `url(${bg})`, // Set the background image using the imported bg
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: "0.2", // Set the opacity only for the background image
};


import Footer from './components/footer/Footer'
import Testimony from './components/testimony/Testimony'
import "./App.css";
import Features from "./components/featured/Features";



function App() {
  return (
    <div>
      <BrowserRouter>
      <div
        className="absolute inset-0 -z-10 bg-black"
        style={bgStyles}
        />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />  
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App;
