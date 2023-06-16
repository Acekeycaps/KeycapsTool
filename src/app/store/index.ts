import { combineReducers } from '@reduxjs/toolkit';
import todo from './todo';

/**
This is the root reducer of the redux

Store base on the file structures.

For example, we have a structure like this

/store
|-/ A
  |-/ B
    |-/ C: { state for C }
  |-/ D: { state for D }
|-/ E: { state for E }

Each module should be export default a final Reducer;
Each parent module should use combineReducers to combine reducers from children.

So, the final `reducer` is
combineReducers({
  A: combineReducers({
    B: combineReducers({
      C: reducerC
    }),
    D: reducerD
  }),
  E: reducerE
})

which also match the `store` structure
{
  A: {
    B: {
      C: data
    },
    D: data
  },
  E: data
}

For each module under the store, it should export reducer as default and export a nested actions
 */

const reducer = combineReducers({
  todo: todo.reducer,
});

const actions = {
  todo: todo.actions,
};

export default {
  actions,
  reducer,
};
