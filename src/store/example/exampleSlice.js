import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'example',
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = exampleSlice.actions;
export default exampleSlice.reducer;
