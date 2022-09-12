import { Provider } from './Provider';

export interface Reservation {
  priceListId: string,
  firstName: string,
  lastName: string,
  flights: {
    [key: string]: ReservationFlight,
  },
  duration: number,
  price: number,
  createdAt?: Date,
}

export interface ReservationFlight {
  index: number,
  departure: string,
  destination: string,
  provider: Provider | null,
  routeId: string | undefined,
}