"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const react_1 = require("react");
const useRedux_1 = require("../../hooks/useRedux");
const react_router_dom_1 = require("react-router-dom");
const cartSlice_1 = require("../../state/cart/cartSlice");
const priceListSlice_1 = require("../../state/priceList/priceListSlice");
const Reservation_tsx_1 = __importDefault(require("../../components/Reservation.tsx"));
const CreateReservationForm_1 = __importDefault(require("../../components/Forms/CreateReservationForm"));
const Header_1 = __importDefault(require("../../layouts/Header"));
const Footer_1 = __importDefault(require("../../layouts/Footer"));
require("./style.scss");
function index() {
    var _a;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const path = (0, useRedux_1.useAppSelector)(cartSlice_1.selectCartPath);
    const flights = (0, useRedux_1.useAppSelector)(cartSlice_1.selectCartFlights);
    const priceListId = (_a = (0, useRedux_1.useAppSelector)(priceListSlice_1.selectPriceListId)) !== null && _a !== void 0 ? _a : '';
    const [duration, setDuration] = (0, react_1.useState)(-1);
    const [price, setPrice] = (0, react_1.useState)(-1);
    const [journeyStart, setJourneyStart] = (0, react_1.useState)();
    const [journeyEnd, setJourneyEnd] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        var _a, _b;
        if (path.length === 0 && Object.keys(flights).length === 0) {
            return navigate('/');
        }
        else {
            setPrice(Object.values(flights).reduce((acc, cv) => { var _a, _b; return acc += (_b = (_a = cv.provider) === null || _a === void 0 ? void 0 : _a.price) !== null && _b !== void 0 ? _b : 0; }, 0));
            setJourneyStart((_a = Object.values(flights)[0].provider) === null || _a === void 0 ? void 0 : _a.flightStart);
            setJourneyEnd((_b = Object.values(flights)[Object.values(flights).length - 1].provider) === null || _b === void 0 ? void 0 : _b.flightEnd);
            setDuration((0, moment_1.default)(journeyEnd).diff((0, moment_1.default)(journeyStart)));
        }
    }, [journeyStart, journeyEnd]);
    return (<div className='create-reservation'>
      <Header_1.default />

      <div className='container'>
        <div className='components'>
          <Reservation_tsx_1.default path={path} flights={flights} flightStart={journeyStart} flightEnd={journeyEnd} price={price}/>

          <CreateReservationForm_1.default priceListId={priceListId} flights={flights} duration={duration} price={price}/>
        </div>
      </div>

      <Footer_1.default />
    </div>);
}
exports.default = index;
