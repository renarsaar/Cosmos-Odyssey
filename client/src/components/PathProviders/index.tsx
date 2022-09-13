import moment from 'moment';
import { useEffect, useState } from 'react';
import { showToast } from '../../lib/toast';
import { useAppSelector } from '../../hooks/useRedux';
import { selectValidUntil } from '../../state/priceList/priceListSlice';
import ProviderList from '../ProviderList';

import Path from '../Path';
import './style.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  fullPath: string[],
};

export default function index({ fullPath }: Props) {
  const [priceListExpired, setPriceListExpired] = useState(false);
  const validUntil = useAppSelector(selectValidUntil);
  const pathsArr: string[][] = [];

  fullPath.forEach((planet, index) => {
    const nextPlanet = fullPath[index + 1];

    if (nextPlanet !== undefined) {
      pathsArr.push([planet, nextPlanet]);
    }
  });

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (priceListExpired === false) {
      interval = setInterval(() => {
        const currentTime = moment().utc();
        const validUntilDate = moment(validUntil);

        if (currentTime.isAfter(validUntilDate)) {
          showToast('warning', 'Price list has been updated. Please refresh the page.', false);

          clearInterval(interval);
          setPriceListExpired(() => true);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [priceListExpired]);

  return (
    <div className='path-providers'>
      {pathsArr.map((path, index) => (
        <div key={index}>
          <Path path={path} />

          <ProviderList
            index={index}
            fullPath={fullPath}
            departure={path[0]}
            destination={path[1]}
          />
        </div>
      ))}

      <ToastContainer />
    </div>
  );
}