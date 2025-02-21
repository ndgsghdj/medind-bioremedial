import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import createBoard from '@wixc3/react-board';

function App() {
  return (
    <div>
      <title>Bioremedial</title>

      <header className="header">
        <div class="container">
          <img src="" alt="bioremedial logo" class="left" />
          <div>
            <h1 class="right">Welcome to Bioremedial!</h1>
            <h2 class="right">Your one-stop destination for biotech revision.</h2>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <a href="/test" id="btn">slay</a>
        <a href="Home" id="btn">some</a>
        <a href="About" id="btn">bacteria</a>
      </nav>

      <div className="row">
        <div className="side">lactobacillus image</div>
        <div className="main">e. coli</div>
      </div>

      <Button variant="contained">Contained</Button>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="test" element={<createBoard />} />
        </Routes>
      </Router>

      <Link to="/About">Dashboard</Link>
    </div>
  );
}

export default App;
