import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { setCartItem, selectCartPath, selectCartFlights } from '../../../state/cart/cartSlice';

import { formatDate } from '../../../utils/helpers/formatDate';
import { Provider } from '../../../interfaces/Provider';

type Props = {
  index: number,
  fullPath: string[],
  provider: Provider,
  departure: string,
  destination: string,
  routeId: string | undefined,
};

export default function index({ index, fullPath, provider, departure, destination, routeId }: Props) {
  const dispatch = useAppDispatch();
  const chosenPath = useAppSelector(selectCartPath);
  const chosenFlights = useAppSelector(selectCartFlights);

  function onClick() {
    const flight = {
      index,
      departure,
      destination,
      provider,
      routeId,
    };

    const payload = {
      chosenPath: fullPath,
      flight,
    };

    dispatch(setCartItem(payload));
  }

  return (
    <div
      role={provider.id}
      className={
        Object.keys(chosenFlights).find((item) => chosenFlights[item].provider === provider) && fullPath === chosenPath ? 'provider-item selected' : 'provider-item'
      }>
      <h3>{provider.company.name}</h3>

      <p>{formatDate(provider.flightStart)} - {formatDate(provider.flightEnd)}</p>

      <p>Price: {provider.price} €</p>

      <button type='button' className='btn' onClick={onClick}>Select</button>
    </div>
  );
}