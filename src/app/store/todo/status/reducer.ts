import { createReducer } from '@reduxjs/toolkit';
import { setError, setLoading } from './actions';
import { initialState } from './store';
import { fetchTodos } from '../actions';

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

/**
 * Extra Reducers
 * Response to the FetchTodo action
 */
const fetchReducer = createReducer(initialState, (builder) => {
  // when pending
  builder.addCase(fetchTodos.pending, (state) => {
    state.loading = 'pending';
  });
  // when rejected
  builder.addCase(fetchTodos.rejected, (state, action) => {
    state.loading = 'fulfiled';
    state.error = action.payload?.err;
  });
  // fulfiled
  builder.addCase(fetchTodos.fulfilled, (state) => {
    state.loading = 'fulfiled';
    state.error = undefined;
  });
});

export default {
  setLoadingReducer,
  setErrorReducer,
  fetchReducer,
};
