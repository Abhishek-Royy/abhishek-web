
// THIS IS A SIMPLE STATIC LOADER
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Home";
import Aboutpage from "./pages/About";
import Contactpage from "./pages/Contact";
import Projectpage from "./pages/Projects";
import Notfound from "./pages/Notfound";
import Preloader from "./components/Preloader";


import Chatbot from "./chatbot/bot"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/projects" element={<Projectpage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Chatbot/>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;



// THIS IS A DAYNAMIC LOADER WHEN ALL THE CONTENT ARE LOAD THE LOADER IS OFF
/*import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Home";
import Aboutpage from "./pages/About";
import Contactpage from "./pages/Contact";
import Projectpage from "./pages/Projects";
import Notfound from "./pages/Notfound";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    // Wait until the window is fully loaded
    window.addEventListener('load', handlePageLoad);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
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
      )}
    </>
  );
}

export default App;*/
