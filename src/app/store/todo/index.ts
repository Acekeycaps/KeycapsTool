import { combineReducers } from '@reduxjs/toolkit';
import core from './core';
import status from './status';
import Actions from './actions';

const reducer = combineReducers({
  core: core.reducer,
  status: status.reducer,
});

const actions = {
  core: core.actions,
  status: status.actions,
  ...Actions,
};

export default {
  actions,
  reducer,
};
