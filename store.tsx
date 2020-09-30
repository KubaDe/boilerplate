import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { alerts, State as AlertsState } from 'modules/alerts/store';
import { app, State as AppState } from 'modules/app/store';

const reducer = combineReducers({
  alerts: alerts.reducer,
  app: app.reducer,
});

export type RootState = {
  alerts: AlertsState;
  app: AppState;
};

function* rootSaga() {
  yield all([alerts.saga]);
  yield all([app.saga]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  devTools: true,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export default store;
