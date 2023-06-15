import {
  SET_TODO_ERROR,
  SET_TODO_LOADING, SymbolAction,
} from '../../actions.type';
import { TodoStatus } from './store';

export type SetTodoLoadingAction = SymbolAction<typeof SET_TODO_LOADING, {
  loading: TodoStatus['loading']
}>;

export const setTodoLoadingAction = (status: boolean): SetTodoLoadingAction => ({
  type: SET_TODO_LOADING,
  payload: {
    loading: status,
  },
});

export type SetTodoErrorAction = SymbolAction<typeof SET_TODO_ERROR, {
  error: TodoStatus['error'],
}>;

export const setTodoError = (error: Error): SetTodoErrorAction => ({
  type: SET_TODO_ERROR,
  payload: {
    error,
  },
});
