import { createSlice } from '@reduxjs/toolkit';
import { State } from './app.types';
export * from './app.types';

const name = 'app';

const initialState: State = {
  isInitialized: false,
};

export default createSlice({
  name,
  initialState,
  reducers: {
    initialize(state) {
      state.isInitialized = true;
    },
  },
});
