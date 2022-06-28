import {configureStore} from '@reduxjs/toolkit';
import {navSlice} from './slices/nav';

export const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
