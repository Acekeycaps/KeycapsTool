import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './store';
import reducers from './reducer';

const slice = createSlice({
  name: 'core',
  initialState,
  reducers,
});

export default {
  actions: slice.actions,
  reducer: slice.reducer,
};
