"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectValidUntil = exports.selectRoutes = exports.selectPriceListId = exports.selectStatus = exports.getPriceList = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const TravelPrices_1 = require("../../api/TravelPrices");
const toast_1 = require("../../lib/toast");
;
const initialState = {
    id: null,
    validUntil: null,
    legs: [],
    status: null,
};
exports.getPriceList = (0, toolkit_1.createAsyncThunk)('/getPriceList', () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, TravelPrices_1.getTravelPrices)().then();
}));
const priceListSlice = (0, toolkit_1.createSlice)({
    name: 'priceList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(exports.getPriceList.pending, (state) => {
            state.status = 'Pending';
        })
            .addCase(exports.getPriceList.fulfilled, (state, action) => {
            state.status = 'Fulfilled';
            const { id, validUntil, legs } = action.payload;
            state.id = id;
            state.validUntil = validUntil;
            state.legs = legs;
        })
            .addCase(exports.getPriceList.rejected, (state, action) => {
            const error = action.error;
            const status = error.status || '';
            const message = error.message || 'Something went wrong getting the newest price list. Please refresh the page or try again later.';
            state.status = 'Rejected';
            (0, toast_1.showToast)('error', `${status} ${message}`, false);
        });
    }
});
const selectStatus = (state) => state.priceList.status;
exports.selectStatus = selectStatus;
const selectPriceListId = (state) => state.priceList.id;
exports.selectPriceListId = selectPriceListId;
const selectRoutes = (state) => state.priceList.legs;
exports.selectRoutes = selectRoutes;
const selectValidUntil = (state) => state.priceList.validUntil;
exports.selectValidUntil = selectValidUntil;
exports.default = priceListSlice.reducer;
