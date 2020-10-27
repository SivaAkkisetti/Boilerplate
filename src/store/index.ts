import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

const reducer = {};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
