import { createSelector } from 'reselect';
import { RootState } from 'store';

export const rootSelector = (state: RootState) => state.alerts;

export const alertsStack = createSelector(
  rootSelector,
  (state) => state.alertsStack
);
