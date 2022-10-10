import priceListReducer, { getPriceList } from './priceListSlice';

describe('Test API calls & state change', () => {
  const initialState = {
    id: null,
    validUntil: null,
    legs: [],
    status: null,
  };

  it('should return the initial state', () => {
    expect(priceListReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('sets status Pending when getPriceList is called', () => {
    const action = { type: getPriceList.pending };
    const state = priceListReducer(initialState, action);
    expect(state).toEqual({ ...initialState, status: 'Pending' });
  });

  // it('sets new state when priceList is fulfulled', () => {
  //   const action = { type: getPriceList.fulfilled };
  //   const state = priceListReducer(initialState, action);
  //   expect(state).objectContaining({
  //     id: expect.any(String),
  //     validUntil: expect.any(String),
  //     legs: expect.any(Array),
  //   })
  // });


  // return getTravelPrices().then((data) => {
  //   expect(data).objectContaining({
  //     id: expect.any(String),
  //     validUntil: expect.any(String),
  //     legs: expect.any(Array),
  //   })
  // })

  // it('sets errors when priceList is rejected', () => {
  //   const action = { type: getPriceList.rejected, payload: { id: 1, validUntil: '', legs: [], status: 'Rejected' } };
  //   const state = priceListReducer(initialState, action);
  //   expect(state).toEqual({ id: action.payload.id, validUntil: action.payload.validUntil, legs: action.payload.legs, status: action.payload.status });
  // });
})
