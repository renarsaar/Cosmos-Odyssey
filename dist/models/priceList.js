"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceList = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
;
const priceListSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
    },
    validUntil: {
        type: Date,
    },
    legs: {
        type: Array,
    },
});
priceListSchema.statics.build = (attr) => {
    return new PriceList(attr);
};
const PriceList = mongoose_1.default.model('PriceList', priceListSchema);
exports.PriceList = PriceList;
