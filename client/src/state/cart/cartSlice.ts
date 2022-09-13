import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

import { ReservationFlight } from '../../interfaces/Reservation';
import { RootState } from '../store';

type CartState = {
  chosenPath: string[],
  flights: {
    [key: string]: ReservationFlight
  },
};

const initialState: CartState = {
  chosenPath: [],
  flights: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItem: (state: CartState, action: PayloadAction<{ chosenPath: string[], flight: ReservationFlight }>) => {
      const { chosenPath, flight } = action.payload;
      let newFlights = state.flights;

      if (chosenPath !== current(state.chosenPath)) {
        newFlights = {};
      }

      // Delete the Flight on toggle
      if (JSON.stringify(state.flights[flight.index]) === JSON.stringify(flight)) {
        const copy = Object.assign({}, newFlights);
        delete copy[flight.index];
        newFlights = { ...copy };
      } else {
        newFlights = { ...newFlights, [flight.index]: flight };
      }

      return {
        chosenPath,
        flights: newFlights,
      };
    },
    reset: () => initialState, // ? Is it needed
  },
});

export const { setCartItem, reset } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart; // ? needed?
export const selectCartPath = (state: RootState) => state.cart.chosenPath;
export const selectCartFlights = (state: RootState) => state.cart.flights;
export default cartSlice.reducer;