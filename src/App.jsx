import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Correct import
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";
import Roadmap from "./components/Roadmap/Roadmap";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main className="overflow-x-hidden bg-white text-dark">
              <Hero />
              <Service />
              <Banner />
              <Subscribe />
              <Banner2 />
              <Footer />
            </main>
          }
        />
        <Route path="/service" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
};

export default App;
