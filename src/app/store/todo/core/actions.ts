import { createAction } from '@reduxjs/toolkit';
import { Todo } from './store';
import {
  ADD_TODO, DELETE_TODO, UPDATE_TODO,
} from '../../actions.type';

export type AddActionPayload = {
  todo: Todo
};
export const add = createAction<AddActionPayload>(ADD_TODO);

export type RemoveActionPayload = {
  todoId: Todo['id']
};
export const remove = createAction<RemoveActionPayload>(DELETE_TODO);

export type UpdateActionPayload = {
  todo: Todo
};
export const update = createAction<UpdateActionPayload>(UPDATE_TODO);

// export type ResetActionPayload = {
//   todos: Todo[]
// };
// export const reset = createAction<ResetActionPayload>(RESET_TODOS);

export default {
  add,
  remove,
  update,
};
