import providersSlice, { setProviders } from './providersSlice';

import { testLegs } from '../../utils/testLegs'

describe('Change state when finding paths', () => {
  const initialState: [] = [];

  it('should return the initial state', () => {
    expect(providersSlice(undefined, { type: undefined })).toEqual(initialState);
  });

  it('return list of provider company name', () => {
    expect(providersSlice(initialState, setProviders(testLegs))).toEqual(
      [
        "Explore Dynamite",
        "Explore Origin",
        "Spacelux",
        "Galaxy Express",
        "Space Piper",
        "SpaceX",
        "Space Odyssey",
        "Spacegenix",
        "Travel Nova",
        "Space Voyager",
      ]
    )
  })
})
