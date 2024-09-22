import React from "react";
import Navbar from "./components/navbar/Navbar";
import bg from "./assets/bg.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import SchedulePage from "./pages/SchedulePage";
import NewsPage from "./pages/NewsPage";
import TicketsPage from "./pages/TicketsPage";
import Footer from "./components/footer/Footer";
import NewsDetails from "./pages/NewsDetails";
import MatchDetails from "./pages/MatchDetails";

const bgStyles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: "0.2",
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="absolute inset-0 -z-10 bg-black" style={bgStyles} />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/match/:id" element={<MatchDetails />} />
          <Route path="/tickets" element={<TicketsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
