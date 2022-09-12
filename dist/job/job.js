"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.storePriceListsJob = void 0;
const moment_1 = __importDefault(require("moment"));
const schedule = __importStar(require("node-schedule"));
const priceList_1 = require("../models/priceList");
const fetch = (url, init) => Promise.resolve().then(() => __importStar(require("node-fetch"))).then(({ default: fetch }) => fetch(url, init));
const rule = new schedule.RecurrenceRule();
rule.tz = 'Etc/UTC';
const fetchCurrentPriceList = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('http://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices');
    const data = yield response.json();
    return data;
});
const storePriceListsJob = schedule.scheduleJob(rule, () => __awaiter(void 0, void 0, void 0, function* () {
    const latestPriceList = yield fetchCurrentPriceList();
    const allPriceLists = yield priceList_1.PriceList.find();
    const oldestPriceListID = allPriceLists[0]._id;
    if (allPriceLists.length >= 15) {
        yield priceList_1.PriceList.findByIdAndDelete(oldestPriceListID);
    }
    const newPriceList = priceList_1.PriceList.build(Object.assign({}, latestPriceList));
    const priceListIncludes = yield priceList_1.PriceList.find({ id: latestPriceList.id });
    if (priceListIncludes.length === 0) {
        yield newPriceList.save();
    }
    // 15 Seconds after the update on /TravelPrice server
    const newJobDate = (0, moment_1.default)(latestPriceList.validUntil).add(15, 's')
        .utc().toString();
    storePriceListsJob.reschedule(newJobDate);
    console.log('------------');
    console.log(`Current Date: ${(0, moment_1.default)().utc()}`);
    console.log(`New Pricelist Valid Until: ${latestPriceList.validUntil}`);
    console.log(`New Job Run On: ${newJobDate}`);
    console.log('------------');
}));
exports.storePriceListsJob = storePriceListsJob;
