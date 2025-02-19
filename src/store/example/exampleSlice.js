import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'example',
  apiResponse: '',
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    getSampleData: (state) => {
      console.log('getSampleData action dispatched');
    },
    getSampleDataSuccess: (state, action) => {
      state.apiResponse = action.payload.message;
    },
  },
});

export const { changeValue, getSampleData, getSampleDataSuccess } =
  exampleSlice.actions;

export default exampleSlice.reducer;
