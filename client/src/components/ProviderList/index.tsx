import moment from 'moment';
import { useMemo } from 'react';
import { useAppSelector } from '../../hooks/useRedux';

import { selectRoutes } from '../../state/priceList/priceListSlice';
import { selectFilter, selectSort } from '../../state/filter/filterSlice';

import ProviderItem from './ProviderItem';
import { Provider } from '../../interfaces/Provider';
import { Route } from '../../interfaces/Route';
import './style.scss';

type Props = {
  index: number,
  fullPath: string[],
  departure: string,
  destination: string,
};

export default function index({ index, fullPath, departure, destination }: Props) {
  const routes: Route[] = useAppSelector(selectRoutes);
  const filter = useAppSelector(selectFilter);
  const sortingValues = useAppSelector(selectSort);

  const currentRoute = routes?.find((route) => {
    const { from, to } = route.routeInfo;

    return from.name === departure && to.name === destination;
  });
  const providers = currentRoute?.providers;

  const filteredAndSortedProviders = useMemo(() => {
    const filteredProviders = filterProviders(providers);
    const sortedProviders = sortProviders(filteredProviders);

    return sortedProviders;
  }, [filter, sortingValues]);

  function filterProviders(providers?: Provider[]): Provider[] {
    if (filter !== '') {
      return providers?.filter((route) => route.company.name === filter) ?? [];
    }

    return providers ?? [];
  }

  function sortProviders(filteredProviders?: Provider[]) {
    const providersForSort: Provider[] = [...filteredProviders ?? []];

    type SortingValues = {
      price: string,
      distance: string,
      duration: string
    };

    for (const value in sortingValues) {
      switch (sortingValues[value as keyof SortingValues]) {
        case 'Price: Low to High':
          providersForSort?.sort((a, b) => a.price > b.price ? 1 : -1);

          break;

        case 'Price: High to Low':
          providersForSort?.sort((a, b) => a.price < b.price ? 1 : -1);

          break;

        // Duration based on total minutes the flight takes
        case 'Duration: Fastest':
          providersForSort?.sort((a, b) => {
            const aStart = moment(a.flightStart);
            const aEnd = moment(a.flightEnd);
            const aDuration = moment.duration(aEnd.diff(aStart));
            const aMinutes = aDuration.asMinutes();

            const bStart = moment(b.flightStart);
            const bEnd = moment(b.flightEnd);
            const bDuration = moment.duration(bEnd.diff(bStart));
            const bMinutes = bDuration.asMinutes();

            return aMinutes > bMinutes ? 1 : -1;
          });

          break;

        case 'Duration: Slowest':
          providersForSort?.sort((a, b) => {
            const aStart = moment(a.flightStart);
            const aEnd = moment(a.flightEnd);
            const aDuration = moment.duration(aEnd.diff(aStart));
            const aMinutes = aDuration.asMinutes();

            const bStart = moment(b.flightStart);
            const bEnd = moment(b.flightEnd);
            const bDuration = moment.duration(bEnd.diff(bStart));
            const bMinutes = bDuration.asMinutes();

            return aMinutes < bMinutes ? 1 : -1;
          });

          break;
      }
    }

    return providersForSort;
  }

  return (
    <div className='provider-list'>
      {filteredAndSortedProviders.length === 0
        ? <div className='provider-item'>No upcoming flights found.</div>
        : filteredAndSortedProviders?.map((provider) => (
          <ProviderItem
            key={provider.id}
            index={index}
            fullPath={fullPath}
            provider={provider}
            departure={departure}
            destination={destination}
            routeId={currentRoute?.id}
          />
        ))
      }
    </div>
  );
}
