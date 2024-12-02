import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/productDetails';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {

  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function
      once: false, // Whether the animation should happen only once
      mirror: false, // Whether elements should animate out when scrolling past them
    });
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;