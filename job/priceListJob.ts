import moment from 'moment';
import { RequestInfo, RequestInit } from "node-fetch";
import * as schedule from 'node-schedule';

import { PriceList } from '../models/priceList';
import { IPriceList } from '../interfaces/IPriceList';

const fetch = (url: RequestInfo, init?: RequestInit) => import("node-fetch").then(({ default: fetch }) => fetch(url, init));

const rule = new schedule.RecurrenceRule();
rule.tz = 'Etc/UTC';

const fetchCurrentPriceList = async (): Promise<IPriceList> => {
  const response = await fetch('http://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices');
  const data: IPriceList = await response.json();

  return data;
}

const storePriceListsJob = schedule.scheduleJob(rule, async () => {
  const priceLists = await PriceList.find();
  const latestPriceList: IPriceList = await fetchCurrentPriceList();
  const oldestPriceListID: string = priceLists[0]._id;

  if (priceLists.length >= 15) {
    await PriceList.findByIdAndDelete(oldestPriceListID);
  }

  const newPriceList = PriceList.build({ ...latestPriceList });

  const priceListIncludes = await PriceList.find({ id: latestPriceList.id });
  if (priceListIncludes.length === 0) {
    await newPriceList.save();
  }

  // 15 Seconds after the update on /TravelPrice server
  const newJobDate = moment(latestPriceList.validUntil).add(15, 's')
    .utc().toString();

  storePriceListsJob.reschedule(newJobDate);

  console.log('------------');
  console.log(`Current Date: ${moment().utc()}`);
  console.log(`New Pricelist Valid Until: ${latestPriceList.validUntil}`);
  console.log(`New Job Run On: ${newJobDate}`);
  console.log('------------');
});

export { storePriceListsJob };
