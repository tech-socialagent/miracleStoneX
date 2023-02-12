import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Granite from './Pages/Granite';
import Marble from './Pages/Marble';
import { ColorContext } from './Context';

function App() {
  const [color, setColor] = useState(0);
  return (
    <ColorContext.Provider value={{color, setColor}} >
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/granite' element={<Granite />} />
          <Route path='/marble' element={<Marble />} />
        </Routes>
      </Router>
    </ColorContext.Provider>

  );
}

export default App;
