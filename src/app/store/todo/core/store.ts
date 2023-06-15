import { List } from 'immutable';

export type Todo = {
  'userId': number,
  'id': number,
  'title': string,
  'body': string
};

export type TodoCore = {
  todos: List<Todo>,
};

const defaultTodoStore: TodoCore = {
  todos: List(),
};

export default defaultTodoStore;
