import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { AxiosError } from 'axios';
import { getTravelPrices } from '../../api/TravelPrices';

import { Route } from '../../interfaces/Route';
import { showToast } from '../../lib/toast';

interface priceListState {
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
} as priceListState;

export const getPriceList = createAsyncThunk(
  '/getPriceList',
  async (): Promise<priceListState> => {
    return getTravelPrices().then();
  }
);

const priceListSlice = createSlice({
  name: 'priceList',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<priceListState>) => {
    builder
      .addCase(getPriceList.pending, (state: priceListState) => {
        state.status = 'Pending';
      })
      .addCase(getPriceList.fulfilled, (state: priceListState, action: PayloadAction<priceListState>) => {
        state.status = 'Fulfilled';

        const { id, validUntil, legs } = action.payload;

        state.id = id;
        state.validUntil = validUntil;
        state.legs = legs;
      })
      .addCase(getPriceList.rejected, (state: priceListState, action) => {
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
