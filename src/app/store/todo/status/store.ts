export type Todo = {
  'userId': number,
  'id': number,
  'title': string,
  'body': string
};

export type TodoStatus = {
  error?: Error,
  loading: boolean
};

const defaultTodoStatus: TodoStatus = {
  error: undefined,
  loading: false,
};

export default defaultTodoStatus;
