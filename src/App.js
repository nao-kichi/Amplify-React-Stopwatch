import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stopwatch from './pages/Stopwatch';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Stopwatch" element={<Stopwatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
