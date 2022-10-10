"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectSort = exports.selectFilter = exports.resetFilters = exports.setFilters = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
;
const initialState = {
    company: '',
    price: '',
    distance: '',
    duration: '',
};
const filterSlice = (0, toolkit_1.createSlice)({
    name: 'filter',
    initialState,
    reducers: {
        setFilters: (state, action) => {
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
                    state[value] = label;
                    break;
            }
        },
        resetFilters: () => initialState,
    },
});
_a = filterSlice.actions, exports.setFilters = _a.setFilters, exports.resetFilters = _a.resetFilters;
const selectFilter = (state) => state.filter.company;
exports.selectFilter = selectFilter;
const selectSort = (state) => state.filter;
exports.selectSort = selectSort;
exports.default = filterSlice.reducer;
