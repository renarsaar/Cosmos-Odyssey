
import { IProvider } from './IProvider';

export interface IReservation {
  priceListId: string,
  firstName: string,
  lastName: string,
  flights: {
    [key: string]: ReservationFlight,
  },
  price: number,
  duration: number,
};

export interface ReservationFlight {
  index: number,
  departure: string,
  destination: string,
  provider: IProvider | null,
  routeId: string | undefined,
}
