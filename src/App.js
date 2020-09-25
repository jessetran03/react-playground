import React from 'react';
import './App.css';
import TheDate from './state/TheDate.js';
import Counter from './state/Counter.js';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb.js';
import RouletteGun from './state-drills/RouletteGun';

function App() {
  return (
    <main className='App'>
      <TheDate />
      <Counter />
      <HelloWorld />
      <Bomb />
      <RouletteGun bulletInChamber={8} />
    </main>
  );
}

export default App;