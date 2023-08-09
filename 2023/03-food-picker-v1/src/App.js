import React from 'react';
import { Counter } from './features/counter/Counter';
import { RestaurantPicker } from './features/restaurantpicker/RestaurantPicker';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <RestaurantPicker />
    </div>
  );
}

export default App;
