import React from 'react';
import './App.css';
import Timer from './Timer.js';
import Header from './Header.js';
import Game from './Game.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <Game />
    </div>
  );
}

export default App;
