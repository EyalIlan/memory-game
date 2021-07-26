import React, { useState, useEffect } from 'react'
import './App.css';
import GamePage from './Components/Pages/Game/game'


function App() {
  return (
    <div className="App">
      <GamePage name= 'eyal' />
    </div>
  );
}

export default App;
