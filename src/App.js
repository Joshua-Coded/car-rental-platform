import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Business from './pages/Business';
import Services from './pages/Services';
import Weddings from './pages/Weddings';
import AirportTransfers from './pages/AirportTransfers';
import SpecialEvents from './pages/SpecialEvents';
import CustomizedPackages from './pages/CustomizedPackages';
import SafetyAndComfort from './pages/SafetyAndComfort';
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
        <Route path="/airport-transfers" element={<AirportTransfers />} />
        <Route path="/special-events" element={<SpecialEvents />} />
        <Route path="customizable-packages" element={<CustomizedPackages />} />
        <Route path="/safety-and-comfort" element={<SafetyAndComfort />} />
      </Routes>
    </Router>
  );
}

export default App;
