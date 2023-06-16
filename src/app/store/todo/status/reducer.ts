import { ReducerDraft } from '../../actions.type';
import { SetErrorActionPayload, SetLoadingActionPayload } from './actions';
import { TodoStatus } from './store';

type StatusReducerDraft<P> = ReducerDraft<TodoStatus, P>;

const setLoaading : StatusReducerDraft<SetLoadingActionPayload> = (state, action) => {
  state.loading = action.payload.loading;
};

const setError: StatusReducerDraft<SetErrorActionPayload> = (state, action) => {
  state.error = action.payload.error;
};

export default {
  setLoaading,
  setError,
};
