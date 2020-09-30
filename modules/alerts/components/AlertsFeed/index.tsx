import { useDispatch, useSelector } from 'react-redux';

import { alerts } from 'modules/alerts/store';

const AlertsFeed = () => {
  const dispatch = useDispatch();
  const alertsStack = useSelector(alerts.selectors.alertsStack);
  const closeAlert = (timestampId: number) =>
    dispatch(alerts.actions.closeAlert({ timestampId }));
  return (
    <>
      {alertsStack.map((alert) => (
        <div
          role="presentation"
          key={alert.timestampId}
          onClick={() => closeAlert(alert.timestampId)}
        >
          {alert.timestampId}
        </div>
      ))}
    </>
  );
};

export default AlertsFeed;
