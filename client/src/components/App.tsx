import { useEffect } from 'react';
import AppRoutes from './AppRoutes';
import { getPriceList, selectStatus } from '../state/priceList/priceListSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';

import PageLoader from './PageLoader';

import '../assets/style.scss';

function App() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(getPriceList());
  }, []);

  return (
    <>
      {status === 'Pending'
        ? <PageLoader type='fullscreen' />
        : <AppRoutes />
      }
    </>
  );
}

export default App;
