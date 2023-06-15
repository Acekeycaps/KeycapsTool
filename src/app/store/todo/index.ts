import { combineReducers } from 'redux';
import core from './core';
import status from './status';
import thunks from './thunks';

const todoRootReducer = combineReducers({
  // add children reducer here.
  core: core.reducer,
  status: status.reducer,
});

export default {
  reducer: todoRootReducer,
  actionCreators: {
    ...core.actionCreators,
    ...status.actionCreators,
    ...thunks,
  },
};
