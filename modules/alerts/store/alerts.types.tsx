import { PayloadAction } from '@reduxjs/toolkit';
import { AlertsLevels } from './alerts.constants';

interface BasicAlert {
  timestampId: number;
  level: AlertsLevels;
  expiring?: number;
}

export type Alert = BasicAlert;

export interface State {
  alertsStack: Alert[];
}

type BroadcastAlertAsyncActionPayload = {
  alert: Omit<Alert, 'timestampId' | 'level'> & {
    level?: AlertsLevels;
  };
};
export type BroadcastAlertAsyncAction = PayloadAction<
  BroadcastAlertAsyncActionPayload
>;

type PushAlertActionPayload = { alert: Alert };
export type PushAlertAction = PayloadAction<PushAlertActionPayload>;

type CloseAlertActionPayload = { timestampId: number };
export type CloseAlertAction = PayloadAction<CloseAlertActionPayload>;
