import { ThunkAction } from 'redux-thunk';
import { CombinedState } from 'redux';
import { List } from 'immutable';
import {
  SetTodoErrorAction, SetTodoLoadingAction, setTodoError, setTodoLoadingAction,
} from './status/actions';
import { Todo, TodoCore } from './core/store';
import { TodoStatus } from './status/store';
import { SymbolAction, FETCH_TODOS } from '../actions.type';
import { SetTodosAction, setTodosAction } from './core/actions';

export type FetchTodo = SymbolAction<typeof FETCH_TODOS, void>;

const fetchTodosAction = (): ThunkAction<
void,
CombinedState<TodoCore & TodoStatus>,
unknown,
SetTodoLoadingAction | SetTodoErrorAction | SetTodosAction
> => async (dispatch) => {
  try {
    const todos = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => data.json())
      .then((json: Array<Todo>) => List(json));
    dispatch(setTodoLoadingAction(true));
    dispatch(setTodosAction(todos));
  } catch (err) {
    // todo: unstable error handler.
    dispatch(setTodoError(new Error('request failed')));
  } finally {
    dispatch(setTodoLoadingAction(false));
  }
};

export default {
  fetchTodosAction,
};
