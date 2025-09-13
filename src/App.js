import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import Home from "./pages/Home"; 
import ClassPage from "./pages/ClassPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/math_universe" element={<Home />} />
        <Route path="/class/:id" element={<ClassPage />} />
      </Routes>
    </Router>
  );
}

export default App;
