import React from 'react';
import './App.css';

import Cart from './components/cart'


function App() 
{
  const bicycles = [{name: 'Honda', cost: 700000}, {name: 'Yamaha', cost: 499990}, {name: 'Ural', cost: 244990}, {name: 'Ducati', cost: 999999}, {name: 'Harley', cost: 1100000}]

  return (
    <div className="App">

      <Cart bicycles = {bicycles}/>

    </div>
  );
}

export default App;
