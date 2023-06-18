export type TodoStatus = {
  error?: Error,
  loading: 'fetching' | 'pending' | 'fulfiled'
};

export const initialState: TodoStatus = {
  error: undefined,
  loading: 'fulfiled',
};
