"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectShowPaths = exports.selectPossiblePaths = exports.sortPossiblePaths = exports.findPossiblePaths = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const findAllPossibleRoutes_1 = require("../../utils/helpers/findAllPossibleRoutes");
;
const initialState = {
    possiblePaths: [],
    showPaths: false,
};
const journeySlice = (0, toolkit_1.createSlice)({
    name: 'journey',
    initialState,
    reducers: {
        findPossiblePaths: (state, action) => {
            const { routes, departure, destination } = action.payload;
            if (departure === '' || destination === '') {
                return;
            }
            state.possiblePaths = [];
            state.possiblePaths = (0, findAllPossibleRoutes_1.calculatePossibleRoutes)(departure, destination, routes);
            state.showPaths = true;
        },
        sortPossiblePaths: (state, action) => {
            const { label } = action.payload;
            const possiblePaths = [...state.possiblePaths];
            if (label === 'Distance: Shortest') {
                state.possiblePaths = possiblePaths.sort((a, b) => Number(a.distance) > Number(b.distance) ? 1 : -1);
            }
            if (label === 'Distance: Longest') {
                state.possiblePaths = possiblePaths.sort((a, b) => Number(a.distance) < Number(b.distance) ? 1 : -1);
            }
        }
    },
});
_a = journeySlice.actions, exports.findPossiblePaths = _a.findPossiblePaths, exports.sortPossiblePaths = _a.sortPossiblePaths;
const selectPossiblePaths = (state) => state.journey.possiblePaths;
exports.selectPossiblePaths = selectPossiblePaths;
const selectShowPaths = (state) => state.journey.showPaths;
exports.selectShowPaths = selectShowPaths;
exports.default = journeySlice.reducer;
