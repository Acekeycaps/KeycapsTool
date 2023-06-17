import { createReducer } from '@reduxjs/toolkit';
import { setError, setLoading } from './actions';
import { initialState } from './store';

const setLoadingReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLoading, (state, action) => {
    state.loading = action.payload.loading;
  });
});

const setErrorReducer = createReducer(initialState, (builder) => {
  builder.addCase(setError, (state, action) => {
    state.error = action.payload.error;
  });
});

export default {
  setLoadingReducer,
  setErrorReducer,
};
