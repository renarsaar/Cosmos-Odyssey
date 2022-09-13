import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { AxiosError } from 'axios';
import { getTravelPrices } from '../../api/TravelPrices';

import { Route } from '../../interfaces/Route';
import { showToast } from '../../lib/toast';

interface PriceListState {
  id: string | null,
  validUntil: Date | null,
  legs: Route[],
  status?: 'Pending' | 'Fulfilled' | 'Rejected' | null,
};

const initialState = {
  id: null,
  validUntil: null,
  legs: [],
  status: null,
} as PriceListState;

export const getPriceList = createAsyncThunk(
  '/getPriceList',
  async (): Promise<PriceListState> => {
    return getTravelPrices().then();
  }
);

const priceListSlice = createSlice({
  name: 'priceList',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<PriceListState>) => {
    builder
      .addCase(getPriceList.pending, (state: PriceListState) => {
        state.status = 'Pending';
      })
      .addCase(getPriceList.fulfilled, (state: PriceListState, action: PayloadAction<PriceListState>) => {
        state.status = 'Fulfilled';

        const { id, validUntil, legs } = action.payload;

        state.id = id;
        state.validUntil = validUntil;
        state.legs = legs;
      })
      .addCase(getPriceList.rejected, (state: PriceListState, action) => {
        const error = action.error as AxiosError;
        const status = error.status || '';
        const message = error.message || 'Something went wrong getting the newest price list. Please refresh the page or try again later.';

        state.status = 'Rejected';

        showToast('error', `${status} ${message}`, false);
      });
  }
});

export const selectStatus = (state: RootState) => state.priceList.status;
export const selectPriceListId = (state: RootState) => state.priceList.id;
export const selectRoutes = (state: RootState) => state.priceList.legs;
export const selectValidUntil = (state: RootState) => state.priceList.validUntil;
export default priceListSlice.reducer;
