import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

// // @desc    GET All TravelPrices
// // @route   GET /api/v1/travelPrices
// // @access  public
// router.get('/', (req, res) => {
//   return res.status((200)).send('Reservation');
// });

// // @desc    POST a new Reservation
// // @route   POST /api/v1/travelPrices
// // @access  public
// router.post('/', (req, res) => {
//   return res.send('Reservation Created');
// });

export { router as priceListsRouter };
