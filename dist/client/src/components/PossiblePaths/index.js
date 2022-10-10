"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const useRedux_1 = require("../../hooks/useRedux");
const journeySlice_1 = require("../../state/journey/journeySlice");
const priceListSlice_1 = require("../../state/priceList/priceListSlice");
const cartSlice_1 = require("../../state/cart/cartSlice");
const Path_1 = __importDefault(require("../Path"));
const FiltersForm_1 = __importDefault(require("../Forms/FiltersForm"));
const PathProviders_1 = __importDefault(require("../PathProviders"));
const numberWithCommas_1 = require("../../utils/helpers/numberWithCommas");
require("./style.scss");
function index() {
    const dispatch = (0, useRedux_1.useAppDispatch)();
    const routes = (0, useRedux_1.useAppSelector)(priceListSlice_1.selectRoutes);
    const showPaths = (0, useRedux_1.useAppSelector)(journeySlice_1.selectShowPaths);
    const possiblePaths = (0, useRedux_1.useAppSelector)(journeySlice_1.selectPossiblePaths);
    const selectedRoutes = (0, useRedux_1.useAppSelector)(cartSlice_1.selectCartFlights);
    const [searchParams] = (0, react_router_dom_1.useSearchParams)({});
    const departure = searchParams.get('departure') || '';
    const destination = searchParams.get('destination') || '';
    (0, react_1.useEffect)(() => {
        dispatch((0, journeySlice_1.findPossiblePaths)({ routes, departure, destination }));
    }, []);
    return (showPaths === true && possiblePaths.length === 0
        ? (<div className='provider-item'>No upcoming flights found.</div>) : (<div className='possible-paths'>
          <FiltersForm_1.default />

          {possiblePaths === null || possiblePaths === void 0 ? void 0 : possiblePaths.map((possiblePath, index) => (<div key={index} className='path-list' role={'path-list'}>
              <div className='possible-path' key={index}>
                <Path_1.default path={possiblePath.path}/>
                <h5>{(0, numberWithCommas_1.numberWithCommas)(+possiblePath.distance)} km</h5>
              </div>

              <PathProviders_1.default fullPath={possiblePath.path}/>
            </div>))}

          {Object.keys(selectedRoutes).length !== 0 && (<react_router_dom_1.Link to='/reservations/create' className='btn create-reservation'>Create Reservation</react_router_dom_1.Link>)}
        </div>));
}
exports.default = index;
