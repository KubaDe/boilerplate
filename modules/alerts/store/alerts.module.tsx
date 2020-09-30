import slice from './alerts.slice';
import saga from './alerts.sagas';
import * as selectors from './alerts.selectors';
import * as constants from './alerts.constants';
export * from './alerts.types';

export const alerts = {
  ...slice,
  selectors,
  saga,
  constants,
};
