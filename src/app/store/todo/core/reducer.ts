import { createReducer } from '@reduxjs/toolkit';
import { TodoCore, initialState } from './store';
import {
  add, remove, update,
} from './actions';
import { fetchTodos } from '../actions';

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(add, (state, action) => {
    const { todo } = action.payload;
    state.todos[todo.id] = todo;
    state.ids.push(todo.id);
  });

  builder.addCase(remove, (state, action) => {
    const { todoId } = action.payload;
    delete state.todos[todoId];
    state.ids = state.ids.filter((id) => id !== todoId);
  });

  builder.addCase(update, (state, action) => {
    const { todo } = action.payload;
    if (state.todos[todo.id] === undefined) {
      state.ids.push(todo.id);
    }
    state.todos[todo.id] = todo;
  });

  // when fulfiled
  builder.addCase(fetchTodos.fulfilled, (state, action) => {
    const { todos } = action.payload;
    console.log('112233', todos);
    const tmpTodo: TodoCore['todos'] = {};
    state.ids = todos.map((todo) => todo.id);
    todos.forEach((todo) => {
      tmpTodo[todo.id] = todo;
    });
    state.todos = tmpTodo;
  });
});

export default reducer;
