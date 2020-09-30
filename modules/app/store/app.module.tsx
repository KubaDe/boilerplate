import slice from './app.slice';
import saga from './app.sagas';
import * as selectors from './app.selectors';
export * from './app.types';

export const app = {
  ...slice,
  selectors,
  saga,
};
