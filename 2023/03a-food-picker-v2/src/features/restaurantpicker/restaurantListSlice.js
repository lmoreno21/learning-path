// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//     data: null,
//     loading: false,
//     error: null,
// }

// const dataSlice = createSlice({
//     name: 'data',
//     initialState,
//     reducers: {
//         fetchDataStart: (state) => {
//             state.loading = true;
//         },
//         fetchDataSuccess: (state, action) => {
//             state.loading = false;
//             state.data = action.payload;
//             state.error = null;
//         },
//         fetchDataFailure: (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         fetchData: async (state, action) => {   
//             try {
//                 state.loading = true;

//                 const response = await axios.get(
//                     'https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20&location=palo alto&term=food',
//                     {
//                         headers: {
//                             Authorization: `Bearer CCfe68mFGsN4wobYuSnwykFV0rOKIGFmtyZTMkJliOIkeibKA3F7m6bHjDHEoUXHDkzqXr0dwqhrAt0OJvLfiN8ATnPfZvJgpaCRr9v1Q3Htw9DVSfLKpoZCIhfcZHYx`,
//                             accept: 'application/json',
                            
//                         },
//                     }
//                 );

//                 console.log(response.data)

//                 state.data = response.data;
//                 state.error = null;
//                 state.loading = false;
//             } catch (error) {
//                 state.error = error.message;
//                 state.loading = false;
//                 console.log('the error msg is ' + error.message)
//             }
//         },
//     },
// });

// export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, fetchData} = dataSlice.actions;
// export default dataSlice.reducer;



// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataStart());

  try {
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20&location=palo alto&term=food',
      {
        headers: {
          Authorization: `Bearer CCfe68mFGsN4wobYuSnwykFV0rOKIGFmtyZTMkJliOIkeibKA3F7m6bHjDHEoUXHDkzqXr0dwqhrAt0OJvLfiN8ATnPfZvJgpaCRr9v1Q3Htw9DVSfLKpoZCIhfcZHYx`,
          accept: 'application/json',
          AccessControlAllowOrigin: '*',
        },
      }
    );

    console.log(response.data);

    dispatch(fetchDataSuccess(response.data)); // Dispatch the success action
  } catch (error) {
    dispatch(fetchDataFailure(error.message)); // Dispatch the failure action
    console.log(error)
  }
};

export default dataSlice.reducer;
