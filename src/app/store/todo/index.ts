import { combineReducers } from '@reduxjs/toolkit';
import core from './core';

const reducer = combineReducers({
  core: core.reducer,
});

const actions = {
  core: core.actions,
};

export default {
  actions,
  reducer,
};
