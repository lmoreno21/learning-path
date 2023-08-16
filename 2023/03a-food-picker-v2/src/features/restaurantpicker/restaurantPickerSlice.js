import { createSlice } from '@reduxjs/toolkit';
import { data } from './data';

const initialState = {
  value: "Click Below for Today's Pick",
};

const restaurantsList = [
    "Tamarine", "President", "Ethel", "BirdDog", "RamenNagi", 
    "Bevri", "Ettan", "Evvia", "Oklava", "Nola", "Coconuts", "Creamery", 
    "SaintMichaels", "Zareen", "Terun"
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function pickRestaurant(list) {
    var randomIndex = getRandomInt(list.length)
    var restaurant = restaurantsList[randomIndex]
    
    for (const [key, value] of Object.entries(data)) {
        if(key === restaurant) {
            var restaurantInfo = value
        }
    }

    return restaurantInfo
}

export const restaurantPickerSlice = createSlice({
  name: 'restaurantPicker',
  initialState,
  reducers: {
    randomRestaurant: (state) => {
        state.value = pickRestaurant(restaurantsList)
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
        state.value += action.payload;
    },
  },
});

export const { randomRestaurant, incrementByAmount } = restaurantPickerSlice.actions;

export const selectRestaurant = (state) => state.restaurantPicker.value;

export const restaurantsLists = restaurantsList

export default restaurantPickerSlice.reducer;