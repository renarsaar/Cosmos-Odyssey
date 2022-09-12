import mongoose from 'mongoose';
import { IReservation } from '../interfaces/IReservation';

interface reservationModelInterface extends mongoose.Model<ReservationDoc> {
  build(attr: IReservation): ReservationDoc;
};

type ReservationDoc = IReservation & mongoose.Document;

const reservationSchema = new mongoose.Schema({
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
    expires: '4h',
    default: Date.now,
  },
});

reservationSchema.statics.build = (attr: IReservation) => {
  return new Reservation(attr);
};

const Reservation = mongoose.model<ReservationDoc, reservationModelInterface>('Reservation', reservationSchema);

export { Reservation };
