import filterSLice, { resetFilters, setFilters } from './filterSlice';

import { testLegs } from '../../utils/testLegs'

describe('Change state when finding paths', () => {
  interface State {
    company: string,
    price: string,
    distance: string,
    duration: string
  }

  const initialState: State = {
    company: '',
    price: '',
    distance: '',
    duration: '',
  };


  it('should return the initial state', () => {
    expect(filterSLice(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should return reset state', () => {
    expect(filterSLice(undefined, resetFilters)).toEqual(initialState);
  });

  it('company || distance changes on setting new filter', () => {
    expect(filterSLice(initialState, setFilters({
      label: 'Galaxy Express',
      value: 'company',
    }))).toEqual({
      company: 'Galaxy Express',
      price: '',
      distance: '',
      duration: '',
    })
  });

  it('price changes on setting new filter', () => {
    expect(filterSLice(initialState, setFilters({
      label: 'Price: High to Low',
      value: 'price',
    }))).toEqual({
      company: '',
      price: 'Price: High to Low',
      distance: '',
      duration: '',
    })
  });

  it('duration changes on setting new filter', () => {
    expect(filterSLice(initialState, setFilters({
      label: 'Duration: Fastest',
      value: 'duration',
    }))).toEqual({
      company: '',
      price: '',
      distance: '',
      duration: 'Duration: Fastest',
    })
  });
})
