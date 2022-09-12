import mongoose from 'mongoose';
import { IPriceList } from '../interfaces/IPriceList';

interface priceListModelInterface extends mongoose.Model<PriceListDoc> {
  build(attr: IPriceList): PriceListDoc;
};

type PriceListDoc = IPriceList & mongoose.Document;

const priceListSchema = new mongoose.Schema({
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

priceListSchema.statics.build = (attr: IPriceList) => {
  return new PriceList(attr);
};

const PriceList = mongoose.model<PriceListDoc, priceListModelInterface>('PriceList', priceListSchema);

export { PriceList };
