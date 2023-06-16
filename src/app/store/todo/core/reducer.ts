import { TodoCore } from './store';
import {
  AddActionPayload, RemoveActionPayload, ResetActionPayload, UpdateActionPayload,
} from './actions';
import { ReducerDraft } from '../../actions.type';

type CoreReducerDraft<P> = ReducerDraft<TodoCore, P>;

const add : CoreReducerDraft<AddActionPayload> = (state, action) => {
  const { todo } = action.payload;
  state.todos.set(todo.id, todo);
  state.ids.push(todo.id);
};

const remove: CoreReducerDraft<RemoveActionPayload> = (state, action) => {
  const { todoId } = action.payload;
  state.todos.delete(todoId);
  state.ids = state.ids.filter((id) => id !== todoId);
};

const update: CoreReducerDraft<UpdateActionPayload> = (state, action) => {
  const { todo } = action.payload;
  if (!state.todos.has(todo.id)) {
    state.ids.push(todo.id);
  }
  state.todos.set(todo.id, todo);
};

const reset: CoreReducerDraft<ResetActionPayload> = (state, action) => {
  const { todos } = action.payload;
  state.todos.clear();
  state.ids = todos.map((todo) => todo.id);
  todos.forEach((todo) => {
    state.todos.set(todo.id, todo);
  });
};

export default {
  add,
  remove,
  update,
  reset,
};
