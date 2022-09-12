"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatDate_1 = require("../../utils/helpers/formatDate");
const numberWithCommas_1 = require("../../utils/helpers/numberWithCommas");
const Path_1 = __importDefault(require("../Path"));
require("./style.scss");
function index({ path, flights, flightStart, flightEnd, price }) {
    return (<div className='reservations'>
      <div className="reservation-header">
        <Path_1.default path={path}/>

        <h2>{(0, formatDate_1.formatDate)(flightStart)} - {(0, formatDate_1.formatDate)(flightEnd)}</h2>
        <h2 className='price'>{(0, numberWithCommas_1.numberWithCommas)(price)} €</h2>
      </div>

      {Object.keys(flights).map((key) => {
            var _a, _b, _c, _d;
            return (<div key={flights[key].index} className='reservation-details'>
          <>
            <p>Flight: {flights[key].departure} - {flights[key].destination}</p>

            <p>Price: {(_a = flights[key].provider) === null || _a === void 0 ? void 0 : _a.price} €</p>

            <p>Departure: {(0, formatDate_1.formatDate)((_b = flights[key].provider) === null || _b === void 0 ? void 0 : _b.flightStart)}</p>

            <p>Arrival: {(0, formatDate_1.formatDate)((_c = flights[key].provider) === null || _c === void 0 ? void 0 : _c.flightEnd)}</p>

            <p>Company: {(_d = flights[key].provider) === null || _d === void 0 ? void 0 : _d.company.name}</p>
          </>
        </div>);
        })}
    </div>);
}
exports.default = index;
