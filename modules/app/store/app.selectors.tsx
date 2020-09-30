import { createSelector } from 'reselect';
import { RootState } from 'store';

export const rootSelector = (state: RootState) => state.app;

export const isInitialized = createSelector(
  rootSelector,
  (state) => state.isInitialized
);
