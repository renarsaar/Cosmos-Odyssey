import { Company } from './Company';

export interface Provider {
  id: string,
  company: Company,
  price: number,
  flightStart: Date,
  flightEnd: Date,
};
