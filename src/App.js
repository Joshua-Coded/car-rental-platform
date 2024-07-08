import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Home2 from './components/Home2';
// import Home3 from './components/Home3';
import Weddings from './pages/Weddings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/business" element={<Home2 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
