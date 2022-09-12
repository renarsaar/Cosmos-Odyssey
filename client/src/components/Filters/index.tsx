import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setProviders, selectProviders } from '../../state/providers/providersSlice';
import { selectRoutes } from '../../state/priceList/priceListSlice';
import { sortPossiblePaths } from '../../state/journey/journeySlice';
import { setFilters } from '../../state/filter/filterSlice';

import Select from '../Select';
import { routesSortOptions } from '../../utils/constants';
import './style.scss';

type SortOptions = {
  value: string, label: string
}

export default function index() {
  const dispatch = useAppDispatch();
  const routes = useAppSelector(selectRoutes);
  const providers = useAppSelector(selectProviders);

  useEffect(() => {
    dispatch(setProviders(routes ?? []));
  }, []);

  const companySortOptions: SortOptions[] = [
    { value: 'company', label: '' }
  ];
  providers.forEach((provider) => {
    companySortOptions.push({
      value: 'company',
      label: provider,
    })
  });

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    const label = event.target.options[event.target.selectedIndex].text;

    const obj = { label, value };

    if (value === 'distance') {
      dispatch(sortPossiblePaths(obj));
    } else {
      dispatch(setFilters(obj));
    }
  }

  return (
    <form className='route-list-filter'>
      <Select title='Company' name='companies' options={companySortOptions} onChange={onChange} />
      <Select title='Filter' name='filters' options={routesSortOptions} onChange={onChange} />
    </form>
  );
}
