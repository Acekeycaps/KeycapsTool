export type TodoStatus = {
  error?: Error,
  loading: boolean
};

export const initialState: TodoStatus = {
  error: undefined,
  loading: false,
};
