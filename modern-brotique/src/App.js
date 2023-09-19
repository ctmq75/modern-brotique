import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './components/products/products';
import Bottoms from './pages/Bottoms/Bottoms';
import Tops from './pages/Tops/Tops';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/Bottoms" element={<Bottoms />} />
        <Route path="/Tops" element={<Tops />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
