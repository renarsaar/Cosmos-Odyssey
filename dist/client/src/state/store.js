"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const filterSlice_1 = __importDefault(require("./filter/filterSlice"));
const priceListSlice_1 = __importDefault(require("./priceList/priceListSlice"));
const journeySlice_1 = __importDefault(require("./journey/journeySlice"));
const providersSlice_1 = __importDefault(require("./providers/providersSlice"));
const cartSlice_1 = __importDefault(require("./cart/cartSlice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        filter: filterSlice_1.default,
        priceList: priceListSlice_1.default,
        journey: journeySlice_1.default,
        providers: providersSlice_1.default,
        cart: cartSlice_1.default,
    }
});
