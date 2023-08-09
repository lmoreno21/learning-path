import { configureStore } from '@reduxjs/toolkit';
import changeSquareReducer from '../features/change-square/changeSquareSlice'

export const store = configureStore({
  reducer: {
    changeSquare: changeSquareReducer
  }
})
