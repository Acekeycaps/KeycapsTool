import { createAction } from '@reduxjs/toolkit';
import { SET_TODO_ERROR, SET_TODO_LOADING } from '../../actions.type';
import { TodoStatus } from './store';

export type SetLoadingActionPayload = {
  loading: TodoStatus['loading']
};
export const setLoading = createAction<SetLoadingActionPayload>(SET_TODO_LOADING);

export type SetErrorActionPayload = {
  error: TodoStatus['error']
};
export const setError = createAction<SetErrorActionPayload>(SET_TODO_ERROR);
