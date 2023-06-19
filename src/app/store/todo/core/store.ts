export type Todo = {
  'userId': number,
  'id': number,
  'title': string,
  'body': string
};

export type TodoCore = {
  todos: {
    [K in Todo['id']]: Todo;
  };
  ids: Array<Todo['id']>
};

export const initialState: TodoCore = {
  todos: {},
  ids: [],
};
