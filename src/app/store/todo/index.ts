import { combineReducers } from '@reduxjs/toolkit';
import core from './core';
import status from './status';
import { fetchTodos } from './thunks';

const reducer = combineReducers({
  core: core.reducer,
  status: status.reducer,
});

const actions = {
  core: core.actions,
  status: status.actions,
  fetchTodo: fetchTodos,
};

export default {
  actions,
  reducer,
};
