import React from 'react';
import logo from './ps.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please vote for Saptaikyam.
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Candiates from Saptaikyam
        </a>
      </header>
    </div>
  );
}

export default App;
