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

 */
import {
  applyMiddleware, bindActionCreators, combineReducers, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { isDEV } from '@/utils/env';
import todo from './todo';

let middlewares;

if (isDEV) {
  middlewares = applyMiddleware(logger, thunk);
} else {
  middlewares = applyMiddleware(thunk);
}

const rootReducer = combineReducers({
  // add children reducer here.
  todo: todo.reducer,
});

export const store = createStore(rootReducer, middlewares);
export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// bind children dispatch with actions creators here.
export const dispatch = bindActionCreators(
  {
    ...todo.actionCreators,
  },
  store.dispatch,
);
