"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useRedux_1 = require("../../hooks/useRedux");
const cartSlice_1 = require("../../state/cart/cartSlice");
const formatDate_1 = require("../../utils/helpers/formatDate");
require("./style.scss");
function index({ index, fullPath, provider, departure, destination, routeId, }) {
    const dispatch = (0, useRedux_1.useAppDispatch)();
    const chosenPath = (0, useRedux_1.useAppSelector)(cartSlice_1.selectCartPath);
    const chosenFlights = (0, useRedux_1.useAppSelector)(cartSlice_1.selectCartFlights);
    function onClick() {
        const flight = {
            index,
            departure,
            destination,
            provider,
            routeId,
        };
        const payload = {
            chosenPath: fullPath,
            flight,
        };
        dispatch((0, cartSlice_1.setCartItem)(payload));
    }
    return (<div className={Object.keys(chosenFlights).find((item) => chosenFlights[item].provider === provider) && fullPath === chosenPath ? 'provider-item selected' : 'provider-item'}>
      <h3>{provider.company.name}</h3>

      <p>{(0, formatDate_1.formatDate)(provider.flightStart)} - {(0, formatDate_1.formatDate)(provider.flightEnd)}</p>

      <p>Price: {provider.price} €</p>

      <button type='button' className='btn' onClick={onClick}>Select</button>
    </div>);
}
exports.default = index;
