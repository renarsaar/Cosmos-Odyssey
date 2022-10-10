import journeySlice, { findPossiblePaths } from './journeySlice';

import { testLegs } from '../../utils/testLegs'

describe('Change state when finding paths', () => {
  const initialState = {
    possiblePaths: [],
    showPaths: false,
  }

  it('should return the initial state', () => {
    expect(journeySlice(undefined, { type: undefined })).toEqual(initialState);
  });

  it('state changes on finding new paths using dijkstra', () => {
    expect(journeySlice(initialState, findPossiblePaths({
      routes: testLegs,
      departure: 'Earth',
      destination: 'Jupiter',
    }))).toEqual({
      possiblePaths: [{ distance: 628730000, path: ['Earth', 'Jupiter'] }],
      showPaths: true,
    })
  })
})
