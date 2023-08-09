import React from 'react';
<<<<<<< HEAD
// import { Counter } from './features/counter/Counter';
// import { Button } from './features/change-square/Button';
// import { Square } from './features/change-square/Square';
import { ChangeSquare } from './features/change-square/ChangeSquare';
=======
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
>>>>>>> 1a618f0fb536f4fcc52b1b094f707e5c552a08c1
import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
        {/* <Counter /> */}
        {/* <Button /> */}
        {/* <Square /> */}
        <ChangeSquare />
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
>>>>>>> 1a618f0fb536f4fcc52b1b094f707e5c552a08c1
    </div>
  );
}

export default App;
