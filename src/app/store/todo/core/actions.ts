import { List } from 'immutable';
import {
  ADD_TODO, DELETE_TODO, SET_TODOS, SymbolAction, UPDATE_TODO,
} from '../../actions.type';
import { Todo } from './store';

export type AddTodoAction = SymbolAction<typeof ADD_TODO, {
  todo: Todo
}>;

export const addTodoAction = (todo: Todo): AddTodoAction => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
});

export type DeleteTodoAction = SymbolAction<typeof DELETE_TODO, {
  todoId: Todo['id'];
}>;

export const deleteTodoAction = (todoId: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: {
    todoId,
  },
});

export type UpdateTodoAction = SymbolAction<typeof UPDATE_TODO, {
  todo: Todo
}>;

export const updateTodoAction = (todo:Todo): UpdateTodoAction => ({
  type: UPDATE_TODO,
  payload: {
    todo,
  },
});

export type SetTodosAction = SymbolAction<typeof SET_TODOS, {
  todos: List<Todo>
}>;

export const setTodosAction = (todos: List<Todo>): SetTodosAction => ({
  type: SET_TODOS,
  payload: {
    todos,
  },
});
