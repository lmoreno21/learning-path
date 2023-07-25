import {  useState } from "react";
import './App.css';
import Square from "./components/Square";
import Button from "./components/Button";

function App() {
  const [bgColor, setBgColor] = useState('')

  return (
    <div className="App">
      <Square bgColor={bgColor} />
      <Button setBgColor={setBgColor}/> 
    </div>
  );
}

export default App;