import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Granite from './Pages/Granite';
import Marble from './Pages/Marble';
import { ColorContext } from './Context';
import GetInTouchPage from './Pages/GetInTouchPage';
import ProductPage from './Pages/ProductPage';

function App() {
  const [color, setColor] = useState('');


  return (
    <ColorContext.Provider value={{ color, setColor }} >
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/granite' element={<Granite />} />
          <Route path='/marble' element={<Marble />} />
          <Route path='/GetInTouch' element={<GetInTouchPage />} />
          <Route path='/granite/product/:id' element={<ProductPage page={'granite'} />} />
          <Route path='/marble/product/:id' element={<ProductPage page={'marble'} />} />
        </Routes>
      </Router>
    </ColorContext.Provider>

  );
}

export default App;
