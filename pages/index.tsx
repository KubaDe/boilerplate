import React from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';
import Index from 'components/Layout';
import Link from 'next/link';

import { alerts } from 'modules/alerts/store';
import AlertsFeed from 'modules/alerts/components/AlertsFeed';

const Page: NextPage = () => {
  const title = 'smaple app';
  const dispatch = useDispatch();
  const sendError = () =>
    dispatch(
      alerts.actions.broadcastAlertAsync({
        alert: { level: 'error', expiring: 5000 },
      })
    );
  return (
    <Index title={title}>
      <Link href="/test">test</Link>
      <button onClick={sendError}>call error</button>
      <AlertsFeed />
    </Index>
  );
};

export default Page;
