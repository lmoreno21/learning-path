import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import changeSquareReducer from '../features/change-square/changeSquareSlice'

export const store = configureStore({
  reducer: {
    changeSquare: changeSquareReducer
    // counter: counterReducer,
  }
})
