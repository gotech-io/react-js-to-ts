import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import filtersReducer from './filterSlice';
import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice,
    filters: filtersReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type { RootState, AppDispatch, AppThunk };
export default store;
