import { createSlice } from '@reduxjs/toolkit';
import {
  State,
  PushAlertAction,
  CloseAlertAction,
  BroadcastAlertAsyncAction,
} from './alerts.types';
export * from './alerts.types';

const name = 'alerts';

const initialState: State = {
  alertsStack: [],
};

export default createSlice({
  name,
  initialState,
  reducers: {
    broadcastAlertAsync: (state, action: BroadcastAlertAsyncAction) => {
      [state, action];
    },
    pushAlert: (state, action: PushAlertAction) => {
      state.alertsStack = [...state.alertsStack, action.payload.alert];
    },
    closeAlert: (state, action: CloseAlertAction) => {
      state.alertsStack = state.alertsStack.filter(
        ({ timestampId }) => timestampId !== action.payload.timestampId
      );
    },
  },
});
