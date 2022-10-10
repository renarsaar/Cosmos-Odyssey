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
const providersSlice_1 = __importStar(require("./providersSlice"));
const testLegs_1 = require("../../utils/testLegs");
describe('Change state when finding paths', () => {
    const initialState = [];
    it('should return the initial state', () => {
        expect((0, providersSlice_1.default)(undefined, { type: undefined })).toEqual(initialState);
    });
    it('return list of provider company name', () => {
        expect((0, providersSlice_1.default)(initialState, (0, providersSlice_1.setProviders)(testLegs_1.testLegs))).toEqual([
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
        ]);
    });
});
