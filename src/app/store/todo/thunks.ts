import { createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from './core/store';
import { FETCH_TODOS } from '../actions.type';

export type FetchTodoFulfiledPayload = {
  todos: Todo[]
};

export type FetchTodoRejectedPayload = {
  err: Error
};

export const FetchTodos = createAsyncThunk<
FetchTodoFulfiledPayload,
void,
{ rejectValue: FetchTodoRejectedPayload }
>(
  FETCH_TODOS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return { todos: data as Todo[] };
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue({ err });
      }
      return rejectWithValue({ err: new Error('Unknown error') });
    }
  },
);

export default {
  FetchTodos,
};
