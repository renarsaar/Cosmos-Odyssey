import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import filterReducer from './filter/filterSlice';
import priceListReducer from './priceList/priceListSlice';
import journeyReducer from './journey/journeySlice';
import providersReducer from './providers/providersSlice';
import cartReducers from './cart/cartSlice';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    priceList: priceListReducer,
    journey: journeyReducer,
    providers: providersReducer,
    cart: cartReducers,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
