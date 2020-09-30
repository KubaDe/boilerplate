import { all, takeLatest } from 'redux-saga/effects';
import slice from './app.slice';

function* initialization() {
  yield console.log(slice.actions.initialize.type);
}

export default all([takeLatest(slice.actions.initialize.type, initialization)]);
