export type Todo = {
  'userId': number,
  'id': number,
  'title': string,
  'body': string
};

export type TodoCore = {
  todos: Map<Todo['id'], Todo>,
  ids: Array<Todo['id']>
};

export const initialState: TodoCore = {
  todos: new Map(),
  ids: [],
};
