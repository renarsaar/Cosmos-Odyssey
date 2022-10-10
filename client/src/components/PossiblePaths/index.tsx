import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/useRedux';
import { findPossiblePaths, selectPossiblePaths, selectShowPaths } from '../../state/journey/journeySlice';
import { selectRoutes } from '../../state/priceList/priceListSlice';
import { selectCartFlights } from '../../state/cart/cartSlice';

import Path from '../Path';
import FiltersForm from '../Forms/FiltersForm';
import PathProviders from '../PathProviders';

import { numberWithCommas } from '../../utils/helpers/numberWithCommas';
import './style.scss';

export default function index() {
  const dispatch = useAppDispatch();
  const routes = useAppSelector(selectRoutes);
  const showPaths = useAppSelector(selectShowPaths);
  const possiblePaths = useAppSelector(selectPossiblePaths);
  const selectedRoutes = useAppSelector(selectCartFlights);

  const [searchParams] = useSearchParams({});
  const departure = searchParams.get('departure') || '';
  const destination = searchParams.get('destination') || '';

  useEffect(() => {
    dispatch(findPossiblePaths({ routes, departure, destination }));
  }, []);

  return (
    showPaths === true && possiblePaths.length === 0
      ? (
        <div className='provider-item'>No upcoming flights found.</div>
      ) : (
        <div className='possible-paths'>
          <FiltersForm />

          {possiblePaths?.map((possiblePath, index) => (
            <div key={index} className='path-list' role={'path-list'}>
              <div className='possible-path' key={index}>
                <Path path={possiblePath.path} />
                <h5>{numberWithCommas(+possiblePath.distance)} km</h5>
              </div>

              <PathProviders fullPath={possiblePath.path} />
            </div>
          ))}

          {Object.keys(selectedRoutes).length !== 0 && (
            <Link to='/reservations/create' className='btn create-reservation'>Create Reservation</Link>
          )}
        </div>
      )
  );
}
