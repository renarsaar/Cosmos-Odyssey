import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { calculatePossibleRoutes } from '../../utils/helpers/findAllPossibleRoutes';

import { Route } from '../../interfaces/Route';

interface PossiblePath {
  distance: number | string,
  path: string[],
};

type JourneyState = {
  possiblePaths: PossiblePath[],
  showPaths: boolean,
};

const initialState = {
  possiblePaths: [],
  showPaths: false,
} as JourneyState;

type FindPossiblePathsAction = {
  routes: Route[],
  departure: string,
  destination: string,
};

const journeySlice = createSlice({
  name: 'journey',
  initialState,
  reducers: {
    findPossiblePaths: (state, action: PayloadAction<FindPossiblePathsAction>) => {
      const { routes, departure, destination } = action.payload;

      if (departure === '' || destination === '') {
        return;
      }

      state.possiblePaths = [];

      state.possiblePaths = calculatePossibleRoutes(departure, destination, routes);

      state.showPaths = true;
    },
    sortPossiblePaths: (state, action: PayloadAction<{ label: string, value: string }>) => {
      const { label } = action.payload;
      const possiblePaths = [...state.possiblePaths];

      if (label === 'Distance: Shortest') {
        state.possiblePaths = possiblePaths.sort((a, b) => Number(a.distance) > Number(b.distance) ? 1 : -1);
      }

      if (label === 'Distance: Longest') {
        state.possiblePaths = possiblePaths.sort((a, b) => Number(a.distance) < Number(b.distance) ? 1 : -1);
      }
    },
    resetJourney: () => initialState,
  },
});

export const { findPossiblePaths, sortPossiblePaths, resetJourney } = journeySlice.actions;
export const selectPossiblePaths = (state: RootState) => state.journey.possiblePaths;
export const selectShowPaths = (state: RootState) => state.journey.showPaths;
export default journeySlice.reducer;
