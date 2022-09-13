"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const useRedux_1 = require("../../../hooks/useRedux");
const priceListSlice_1 = require("../../../state/priceList/priceListSlice");
const journeySlice_1 = require("../../../state/journey/journeySlice");
const constants_1 = require("../../../utils/constants");
const AutoComplete_1 = __importDefault(require("../../AutoComplete"));
require("./style.scss");
function index() {
    const dispatch = (0, useRedux_1.useAppDispatch)();
    const routes = (0, useRedux_1.useAppSelector)(priceListSlice_1.selectRoutes);
    const [searchParams] = (0, react_router_dom_1.useSearchParams)({});
    const departure = searchParams.get('departure') || '';
    const destination = searchParams.get('destination') || '';
    function onSubmit(event) {
        event.preventDefault();
        if (departure === '' || destination === '') {
            return;
        }
        ;
        dispatch((0, journeySlice_1.findPossiblePaths)({ routes, departure, destination }));
    }
    return (<form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="departure">Departure</label>
        <AutoComplete_1.default suggestions={constants_1.planets} name='departure' value={departure}/>
      </div>

      <div className="form-group">
        <label htmlFor="destination">Destination</label>
        <AutoComplete_1.default suggestions={constants_1.planets} name='destination' value={destination}/>
      </div>

      <input type="submit" className='btn' value="Find Routes"/>
    </form>);
}
exports.default = index;
