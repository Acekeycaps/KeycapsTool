import { Reducer } from 'redux';
import defaultTodoStatus, { TodoStatus } from './store';
import {
  SET_TODO_LOADING, SET_TODO_ERROR,
} from '../../actions.type';
import {
  SetTodoLoadingAction, SetTodoErrorAction,
} from './actions';

const reducer: Reducer<
TodoStatus | undefined,
SetTodoLoadingAction | SetTodoErrorAction
> = (state, action): TodoStatus => {
  if (state === undefined) {
    return defaultTodoStatus;
  }

  if (action.type === SET_TODO_ERROR) {
    const { error } = action.payload;
    return {
      ...state,
      error,
    };
  }

  if (action.type === SET_TODO_LOADING) {
    const { loading } = action.payload;
    return {
      ...state,
      loading,
    };
  }

  return state;
};

export default reducer;
