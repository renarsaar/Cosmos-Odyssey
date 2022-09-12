"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationsRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.reservationsRouter = router;
// @desc    GET All Reservations
// @route   GET /api/v1/reservations
// @access  public
router.get('/', (req, res) => {
    return res.status((200)).send('Reservation');
});
// @desc    POST a new Reservation
// @route   POST /api/v1/reservations
// @access  public
router.post('/', (req, res) => {
    return res.send('Reservation Created');
});
