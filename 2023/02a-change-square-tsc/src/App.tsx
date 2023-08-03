import React, { useState } from 'react';
import './App.css';
import Square from './components/Square';
import Button from './components/Button';

const App: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>('')

  return (
    <div className="App">
      <Square bgColor={bgColor} />
      <Button setBgColor={setBgColor}/>
    </div>
  );
}

export default App;