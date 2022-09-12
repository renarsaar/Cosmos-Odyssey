import express, { Request, Response } from 'express';
import { Reservation } from '../models/reservation';

const router = express.Router();

// @desc    GET All Reservations
// @route   GET /api/v1/reservations
// @access  public
router.get('/api/v1/reservations', async (req: Request, res: Response) => {
  try {
    const reservations = await Reservation.find();

    return res.status(200).send(reservations);
  } catch (error) {
    return res.status(500).send('Something went wrong. Please try again later.');
  }
});

// @desc    POST a new Reservation
// @route   POST /api/v1/reservations
// @access  public
router.post('/api/v1/reservations', async (req: Request, res: Response) => {
  const {
    priceListId, firstName, lastName, flights, price, duration,
  } = req.body;

  const reservation = Reservation.build({
    priceListId, firstName, lastName, flights, price, duration,
  });

  try {
    await reservation.save();

    return res.status(201).send(reservation);
  } catch (error) {
    return res.status(400).send('Something went wrong. Please try again later');
  }
});

export { router as reservationsRouter };
