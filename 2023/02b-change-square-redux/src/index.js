import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
<<<<<<< HEAD
=======
import reportWebVitals from './reportWebVitals';
>>>>>>> 1a618f0fb536f4fcc52b1b094f707e5c552a08c1
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
<<<<<<< HEAD
=======

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 1a618f0fb536f4fcc52b1b094f707e5c552a08c1
