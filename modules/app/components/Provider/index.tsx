import { ReactChild, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { app } from 'modules/app/store';

type Props = {
  children?: ReactChild;
};

const Provider = ({ children }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(app.actions.initialize());
  }, []);
  return <>{children}</>;
};

export default Provider;
