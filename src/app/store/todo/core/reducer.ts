import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './store';
import {
  add, remove, update,
} from './actions';
import { FetchTodos } from '../thunks';

// const add : CoreReducerDraft<AddActionPayload> = ;

const addReducer = createReducer(initialState, (builder) => {
  builder.addCase(add, (state, action) => {
    const { todo } = action.payload;
    state.todos.set(todo.id, todo);
    state.ids.push(todo.id);
  });
});

const removeReducer = createReducer(initialState, (builder) => {
  builder.addCase(remove, (state, action) => {
    const { todoId } = action.payload;
    state.todos.delete(todoId);
    state.ids = state.ids.filter((id) => id !== todoId);
  });
});

const updateReducer = createReducer(initialState, (builder) => {
  builder.addCase(update, (state, action) => {
    const { todo } = action.payload;
    if (!state.todos.has(todo.id)) {
      state.ids.push(todo.id);
    }
    state.todos.set(todo.id, todo);
  });
});

// const resetReducer = createReducer(initialState, (builder) => {
//   builder.addCase(reset, (state, action) => {
//     const { todos } = action.payload;
//     state.todos.clear();
//     state.ids = todos.map((todo) => todo.id);
//     todos.forEach((todo) => {
//       state.todos.set(todo.id, todo);
//     });
//   });
// });

const fetchReducer = createReducer(initialState, (builder) => {
  // when fulfiled
  builder.addCase(FetchTodos.fulfilled, (state, action) => {
    const { todos } = action.payload;
    state.todos.clear();
    state.ids = todos.map((todo) => todo.id);
    todos.forEach((todo) => {
      state.todos.set(todo.id, todo);
    });
  });
});

export default {
  addReducer,
  removeReducer,
  updateReducer,
  fetchReducer,
};
