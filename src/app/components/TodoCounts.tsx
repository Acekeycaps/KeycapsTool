'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import appStore from '../store';
import { RootState } from '../containers/RootStore';

import type { } from 'redux-thunk/extend-redux';

// calculated state
const selectTodoCounts = createSelector(
  (state: RootState) => state.todo.core.ids,
  (ids) => ids.length,
);

const TodoCounts: React.FC = () => {
  const dispatch = useDispatch();
  const todosCount = useSelector(selectTodoCounts);

  useEffect(() => {
    console.log('123');
    dispatch(appStore.actions.todo.fetchTodos());
  }, [dispatch]);

  console.log('123', todosCount);

  return <p>{todosCount}</p>;
};

export default TodoCounts;
