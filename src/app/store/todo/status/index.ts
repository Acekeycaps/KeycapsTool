import TodoReducer from './reducer';
import * as actionCreators from './actions';

export default {
  reducer: TodoReducer,
  actionCreators: { ...actionCreators },
};
