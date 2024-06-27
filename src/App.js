import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Business from './pages/Business';
import Services from './pages/Services';
import Weddings from './pages/Weddings';
// import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/services" element={<Services />} />
        <Route path="/weddings" element={<Weddings />} />
      </Routes>
    </Router>
  );
}

export default App;
