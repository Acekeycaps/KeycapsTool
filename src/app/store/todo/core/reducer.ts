import { Reducer } from 'redux';
import defaultTodoStore, { TodoCore } from './store';
import {
  ADD_TODO, DELETE_TODO, SET_TODOS, UPDATE_TODO,
} from '../../actions.type';
import {
  AddTodoAction, DeleteTodoAction, SetTodosAction, UpdateTodoAction,
} from './actions';

const TodoReducer: Reducer<
TodoCore | undefined,
AddTodoAction | DeleteTodoAction | UpdateTodoAction | SetTodosAction
> = (state, action): TodoCore => {
  if (state === undefined) {
    return defaultTodoStore;
  }

  if (action.type === ADD_TODO) {
    const { todo } = action.payload;
    return {
      todos: state.todos.push(todo),
    };
  }

  if (action.type === DELETE_TODO) {
    const { todoId } = action.payload;
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== todoId),
    };
  }

  if (action.type === UPDATE_TODO) {
    const { todo } = action.payload;
    return {
      ...state,
      todos: state.todos.map((old) => (old.id === todo.id ? todo : old)),
    };
  }

  if (action.type === SET_TODOS) {
    return {
      ...state,
      todos: action.payload.todos,
    };
  }

  return state;
};

export default TodoReducer;
