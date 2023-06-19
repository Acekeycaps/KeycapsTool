'use client';

import { configureStore } from '@reduxjs/toolkit';
import { PropsWithChildren, memo } from 'react';
import { Provider } from 'react-redux';
import { isDEV } from '@/utils/env';
import appStore from '../store';

const store = configureStore({
  reducer: appStore.reducer,
  // middleware: applyMiddleware()
  devTools: isDEV,
});

export type RootState = ReturnType<typeof store.getState>;

const RootStore: React.FC<PropsWithChildren> = ({ children }) => <Provider store={store}>
  {children}
</Provider>;

export default memo(RootStore);
