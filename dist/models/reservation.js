"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
;
const reservationSchema = new mongoose_1.default.Schema({
    priceListId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    flights: {
        type: Object,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: { expires: '4h' },
    },
});
reservationSchema.statics.build = (attr) => {
    return new Reservation(attr);
};
const Reservation = mongoose_1.default.model('Reservation', reservationSchema);
exports.Reservation = Reservation;
