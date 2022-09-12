import { AxiosResponse } from 'axios';
import { Route } from '../interfaces/Route';
import { getAxios } from '../lib/axiosClient';

interface TravelPrices {
  id: string,
  validUntil: Date,
  legs: Route[],
}

async function getTravelPrices(): Promise<AxiosResponse<TravelPrices>> {
  return await getAxios('/TravelPrices');
}

export { getTravelPrices };
