import { all, takeEvery, put, delay, select, spawn } from 'redux-saga/effects';

import alerts from './alerts.slice';
import * as selectors from './alerts.selectors';
import { BroadcastAlertAsyncAction, Alert } from './alerts.types';

function* expireAlertTask(alert: Alert) {
  yield delay(alert.expiring || 0);
  const alertsStack: Alert[] = yield select(selectors.alertsStack);
  if (
    alertsStack.some(({ timestampId }) => alert.timestampId === timestampId)
  ) {
    yield put(alerts.actions.closeAlert({ timestampId: alert.timestampId }));
  }
}

function* broadcastAlertAsync({ payload }: BroadcastAlertAsyncAction) {
  const timestampId = new Date().getTime();
  const alert: Alert = {
    level: 'info',
    ...payload.alert,
    timestampId,
  };
  yield put(alerts.actions.pushAlert({ alert }));
  if (alert.expiring) {
    yield spawn(expireAlertTask, alert);
  }
}

export default all([
  takeEvery(alerts.actions.broadcastAlertAsync, broadcastAlertAsync),
]);
