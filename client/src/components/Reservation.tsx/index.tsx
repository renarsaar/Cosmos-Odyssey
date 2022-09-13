import Path from '../Path';

import { formatDate } from '../../utils/helpers/formatDate';
import { numberWithCommas } from '../../utils/helpers/numberWithCommas';
import { ReservationFlight } from '../../interfaces/Reservation';
import './style.scss';

type Props = {
  path: string[],
  flights: {
    [key: string]: ReservationFlight,
  },
  flightStart: Date | undefined,
  flightEnd: Date | undefined,
  price: number,
};

export default function index({
  path, flights, flightStart, flightEnd, price
}: Props) {
  return (
    <div className='reservations'>
      <div className="reservation-header">
        <Path path={path} />

        <h2>{formatDate(flightStart)} - {formatDate(flightEnd)}</h2>
        <h2 className='price'>{numberWithCommas(price)} €</h2>
      </div>

      {Object.keys(flights).map((key) => (
        <div key={flights[key].index} className='reservation-details'>
          <>
            <p>Flight: {flights[key].departure} - {flights[key].destination}</p>

            <p>Price: {flights[key].provider?.price} €</p>

            <p>Departure: {formatDate(flights[key].provider?.flightStart)}</p>

            <p>Arrival: {formatDate(flights[key].provider?.flightEnd)}</p>

            <p>Company: {flights[key].provider?.company.name}</p>
          </>
        </div>
      ))}
    </div>
  );
}
