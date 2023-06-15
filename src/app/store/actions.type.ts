import { Action } from 'redux';

/**
 * Unique Action Names for Reducers
 * use symbol to avoid name conflict between Reducer.
 */
export type SymbolAction<T extends Symbol, D> = Action<T> & {
  payload: D
};

// action types
export const ADD_TODO = Symbol('ADD_TODO');
export const DELETE_TODO = Symbol('DELETE_TODO');
export const UPDATE_TODO = Symbol('UPDATE_TODO');
export const SET_TODOS = Symbol('SET_TODOS');

export const SET_TODO_LOADING = Symbol('SET_TODO_LOADING');
export const SET_TODO_ERROR = Symbol('SET_TODO_ERROR');

export const FETCH_TODOS = Symbol('FETCH_TODOS');
