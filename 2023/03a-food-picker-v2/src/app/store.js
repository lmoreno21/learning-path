import { configureStore } from '@reduxjs/toolkit';
import restaurantPickerReducer from '../features/restaurantpicker/restaurantPickerSlice';
import dataReducer from '../features/restaurantpicker/restaurantListSlice'

export const store = configureStore({
  reducer: {
    restaurantPicker: restaurantPickerReducer,
    restaurantList: dataReducer
  },
});