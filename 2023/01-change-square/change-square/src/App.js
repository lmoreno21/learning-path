import {  useState } from "react";
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('')

  function generateBgColor() {
    var randomHex = (Math.floor(Math.random() * (16777215 + 1))).toString(16)
    var newBgColor = '#' + randomHex
    return newBgColor
  }

  function handleClick() {
    setBgColor(generateBgColor())
  }

  return (
    <div className="App">
      <div className="Square">
        <div className="Words">{bgColor}</div>
      </div>
      <button onClick={handleClick}>click here to change color</button>
    </div>
  );
}

export default App;
