import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: '#FFFFFF'
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const generateColor = createAsyncThunk (
    'generateBgColor',
    async() => {
        const response = generateBgColor()
        return response
    }
)

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
        }
    }
})
export const { changeColor } = changeSquareSlice.actions;

export const selectColor = (state) => state.changeSquare.value;

export default changeSquareSlice.reducer;