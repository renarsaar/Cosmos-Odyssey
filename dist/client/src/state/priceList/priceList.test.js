"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const priceListSlice_1 = __importStar(require("./priceListSlice"));
describe('Test API calls & state change', () => {
    const initialState = {
        id: null,
        validUntil: null,
        legs: [],
        status: null,
    };
    it('should return the initial state', () => {
        expect((0, priceListSlice_1.default)(undefined, { type: undefined })).toEqual(initialState);
    });
    it('sets status Pending when getPriceList is called', () => {
        const action = { type: priceListSlice_1.getPriceList.pending };
        const state = (0, priceListSlice_1.default)(initialState, action);
        expect(state).toEqual(Object.assign(Object.assign({}, initialState), { status: 'Pending' }));
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
});
