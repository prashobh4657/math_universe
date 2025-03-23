import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './pages/Home'; 
import Class1 from './pages/Class1';

function App() {
  return (
    <Router>  {}
      <Routes>
        <Route path="/math_universe" element={<Home />} />  {}
        <Route path="/class1" element={<Class1 />} />  {}
      </Routes>
    </Router>
  );
}


export default App;
