import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Business from './pages/Business';
import Weddings from './pages/Weddings';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/weddings" element={<Weddings />} />
      </Routes>
    </Router>
  );
}

export default App;