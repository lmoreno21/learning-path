import React from 'react';
// import { Counter } from './features/counter/Counter';
// import { Button } from './features/change-square/Button';
// import { Square } from './features/change-square/Square';
import { ChangeSquare } from './features/change-square/ChangeSquare';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <Counter /> */}
        {/* <Button /> */}
        {/* <Square /> */}
        <ChangeSquare />
    </div>
  );
}

export default App;
