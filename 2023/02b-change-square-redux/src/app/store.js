import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {

    // counter: counterReducer,
=======
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
>>>>>>> 1a618f0fb536f4fcc52b1b094f707e5c552a08c1
  },
});
