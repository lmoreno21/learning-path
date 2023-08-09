import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: '#FFFFFF'
}

function generateBgColor() {
    var randomHex = (Math.floor(Math.random() * (16777215 + 1))).toString(16)
    var newBgColor = '#' + randomHex
    return newBgColor
}

export const changeSquareSlice = createSlice({
    name: 'changeSquare',
    initialState,
    reducers: {
        changeColor: (state) => {
            state.value = generateBgColor()
        },
        handleClickPink: (state) => {
            state.value = '#ffc2d1'
        }
    }
})

export const { changeColor, handleClickPink } = changeSquareSlice.actions;

export const selectColor = (state) => state.changeSquare.value;

export default changeSquareSlice.reducer;