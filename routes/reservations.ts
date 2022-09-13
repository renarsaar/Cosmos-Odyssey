import express, { Request, Response } from 'express';
import moment from 'moment';
import { Reservation } from '../models/reservation';
import { PriceList } from '../models/priceList';
import { IPriceList } from '../interfaces/IPriceList';

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
  const { priceListId, firstName, lastName, flights, price, duration } = req.body;
  const latestPriceList = await PriceList.findOne().sort({ _id: -1 });

  const currentTime = moment().utc();
  const validUntilDate = moment(latestPriceList!.validUntil);

  if (currentTime.isAfter(validUntilDate) || priceListId !== latestPriceList?.id) {
    return res.status(400).send('Price list has been updated. Please refresh the page and select new Routes');
  }

  const reservation = Reservation.build({
    priceListId, firstName, lastName, flights, price, duration,
  });

  try {
    await reservation.save();

    return res.status(201).json({ message: 'Reservation Created Successfully.' });
  } catch (error) {
    return res.status(500).send('Something went wrong. Please try again.');
  }
});

export { router as reservationsRouter };
