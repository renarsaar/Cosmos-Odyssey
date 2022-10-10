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
const journeySlice_1 = __importStar(require("./journeySlice"));
const testLegs_1 = require("../../utils/testLegs");
describe('Change state when finding paths', () => {
    const initialState = {
        possiblePaths: [],
        showPaths: false,
    };
    it('should return the initial state', () => {
        expect((0, journeySlice_1.default)(undefined, { type: undefined })).toEqual(initialState);
    });
    it('state changes on finding new paths using dijkstra', () => {
        expect((0, journeySlice_1.default)(initialState, (0, journeySlice_1.findPossiblePaths)({
            routes: testLegs_1.testLegs,
            departure: 'Earth',
            destination: 'Jupiter',
        }))).toEqual({
            possiblePaths: [{ distance: 628730000, path: ['Earth', 'Jupiter'] }],
            showPaths: true,
        });
    });
});
