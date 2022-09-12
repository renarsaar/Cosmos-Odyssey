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
exports.postReservation = exports.getReservations = void 0;
const axiosClient_1 = require("../lib/axiosClient");
// Get Reservations
function getReservations() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, axiosClient_1.getAxios)('/api/v1/reservations');
    });
}
exports.getReservations = getReservations;
// Post New Reservation
function postReservation(body) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, axiosClient_1.postAxios)('/api/v1/reservations', body);
    });
}
exports.postReservation = postReservation;
