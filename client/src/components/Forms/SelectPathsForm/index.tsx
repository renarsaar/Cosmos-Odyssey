import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/useRedux';

import { selectRoutes } from '../../../state/priceList/priceListSlice';
import { findPossiblePaths } from '../../../state/journey/journeySlice';

import { planets } from '../../../utils/constants';

import AutoComplete from '../../AutoComplete';
import './style.scss';


export default function index() {
  const dispatch = useAppDispatch();
  const routes = useAppSelector(selectRoutes);
  const [searchParams] = useSearchParams({});
  const departure = searchParams.get('departure') || '';
  const destination = searchParams.get('destination') || '';

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (departure === '' || destination === '') {
      return;
    };

    dispatch(findPossiblePaths({ routes, departure, destination }));
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="departure">Departure</label>
        <AutoComplete suggestions={planets} name='departure' value={departure} />
      </div>

      <div className="form-group">
        <label htmlFor="destination">Destination</label>
        <AutoComplete suggestions={planets} name='destination' value={destination} />
      </div>

      <input type="submit" className='btn' value="Find Routes" role={'find-routes'} />
    </form>
  );
}
