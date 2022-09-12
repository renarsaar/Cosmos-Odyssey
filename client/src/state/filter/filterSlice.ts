import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface State {
  company: string,
  price: string,
  distance: string,
  duration: string
};

const initialState: State = {
  company: '',
  price: '',
  distance: '',
  duration: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<{ label: string, value: string }>) => {
      const { label, value } = action.payload;

      switch (true) {
        case (value === 'company'):
          state.company = label;

          break;

        case (value === ''):
          state.distance = '';
          state.duration = '';
          state.price = '';

          break;

        default:
          state.distance = '';
          state.duration = '';
          state.price = '';

          state[value as keyof State] = label;
          break;
      }
    },
  },
});

export const { setFilters } = filterSlice.actions;
export const selectFilter = (state: RootState) => state.filter.company;
export const selectSort = (state: RootState) => state.filter;
export default filterSlice.reducer;
