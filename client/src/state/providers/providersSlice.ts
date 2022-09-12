import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Route } from '../../interfaces/Route';
import { RootState } from '../store';

const providersSlice = createSlice({
  name: 'providers',
  initialState: [] as string[],
  reducers: {
    setProviders: (state, action: PayloadAction<Route[]>) => {
      const providerNames: string[] = [];

      action.payload.map((route) => {
        const routeProviders = route.providers;

        routeProviders.map((provider) => {
          const providerName = provider.company.name;

          if (!providerNames.includes(providerName)) {
            providerNames.push(providerName);
          }
        });
      });

      return providerNames;
    },
  },
});

export const { setProviders } = providersSlice.actions;
export const selectProviders = (state: RootState) => state.providers;
export default providersSlice.reducer;