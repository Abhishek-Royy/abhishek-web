import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Home";
import Aboutpage from "./pages/About";
import Contactpage from "./pages/Contact";
import Projectpage from "./pages/Projects";
import Notfound from "./pages/Notfound";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/projects" element={<Projectpage />} />
          <Route path="/contact" element={<Contactpage />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
