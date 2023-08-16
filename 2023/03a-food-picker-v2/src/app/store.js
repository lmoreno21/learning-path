import { configureStore } from '@reduxjs/toolkit';
import restaurantPickerReducer from '../features/restaurantpicker/restaurantPickerSlice';

export const store = configureStore({
  reducer: {
    restaurantPicker: restaurantPickerReducer
  },
});