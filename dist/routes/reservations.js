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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationsRouter = void 0;
const express_1 = __importDefault(require("express"));
const moment_1 = __importDefault(require("moment"));
const reservation_1 = require("../models/reservation");
const priceList_1 = require("../models/priceList");
const router = express_1.default.Router();
exports.reservationsRouter = router;
// @desc    GET All Reservations
// @route   GET /api/v1/reservations
// @access  public
router.get('/api/v1/reservations', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservations = yield reservation_1.Reservation.find();
        return res.status(200).send(reservations);
    }
    catch (error) {
        return res.status(500).send('Something went wrong. Please try again later.');
    }
}));
// @desc    POST a new Reservation
// @route   POST /api/v1/reservations
// @access  public
router.post('/api/v1/reservations', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { priceListId, firstName, lastName, flights, price, duration } = req.body;
    const latestPriceList = yield priceList_1.PriceList.findOne().sort({ _id: -1 });
    const currentTime = (0, moment_1.default)().utc();
    const validUntilDate = (0, moment_1.default)(latestPriceList.validUntil);
    if (currentTime.isAfter(validUntilDate) || priceListId !== (latestPriceList === null || latestPriceList === void 0 ? void 0 : latestPriceList.id)) {
        return res.status(400).send('Price list has been updated. Please refresh the page and select new Routes');
    }
    const reservation = reservation_1.Reservation.build({
        priceListId, firstName, lastName, flights, price, duration,
    });
    try {
        yield reservation.save();
        return res.status(201).json({ message: 'Reservation Created Successfully.' });
    }
    catch (error) {
        return res.status(500).send('Something went wrong. Please try again.');
    }
}));
