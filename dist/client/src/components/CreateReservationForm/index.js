"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const react_hook_form_1 = require("react-hook-form");
const useRedux_1 = require("../../hooks/useRedux");
const react_router_dom_1 = require("react-router-dom");
const priceListSlice_1 = require("../../state/priceList/priceListSlice");
const Reservation_1 = require("../../api/Reservation");
require("./style.scss");
const react_toastify_1 = require("react-toastify");
const toast_1 = require("../../lib/toast");
function index({ priceListId, flights, duration, price }) {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const priceListValidUntil = (0, useRedux_1.useAppSelector)(priceListSlice_1.selectValidUntil);
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)();
    function onSubmit(data) {
        const currentTime = (0, moment_1.default)().utc();
        const validUntilDate = (0, moment_1.default)(priceListValidUntil);
        if (currentTime.isAfter(validUntilDate)) {
            (0, toast_1.showToast)('error', 'Price list has been updated. Please refresh the page and select new Routes', false);
            return;
        }
        const reservation = Object.assign(Object.assign({}, data), { priceListId,
            flights,
            duration,
            price });
        (0, Reservation_1.postReservation)(reservation)
            .then((response) => {
            (0, toast_1.showToast)('success', 'Reservation created successfully', 10000);
        })
            .catch((error) => (0, toast_1.showToast)('error', error.message, false));
    }
    return (<form onSubmit={handleSubmit(onSubmit)} className='create-reservation-form'>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input {...register('firstName', { required: true })}/>
        {errors.firstName && <p>First name is required.</p>}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input {...register('lastName', { required: true })}/>
        {errors.lastName && <p>Last name is required.</p>}
      </div>

      <input type="submit" className='btn' value='Create Reservation'/>

      <react_router_dom_1.Link to='/' className='btn'>Cancel</react_router_dom_1.Link>

      <react_toastify_1.ToastContainer />
    </form>);
}
exports.default = index;
