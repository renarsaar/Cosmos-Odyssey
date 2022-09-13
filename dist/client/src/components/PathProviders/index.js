"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const react_1 = require("react");
const toast_1 = require("../../lib/toast");
const useRedux_1 = require("../../hooks/useRedux");
const priceListSlice_1 = require("../../state/priceList/priceListSlice");
const ProviderList_1 = __importDefault(require("../ProviderList"));
const Path_1 = __importDefault(require("../Path"));
require("./style.scss");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function index({ fullPath }) {
    const [priceListExpired, setPriceListExpired] = (0, react_1.useState)(false);
    const validUntil = (0, useRedux_1.useAppSelector)(priceListSlice_1.selectValidUntil);
    const pathsArr = [];
    fullPath.forEach((planet, index) => {
        const nextPlanet = fullPath[index + 1];
        if (nextPlanet !== undefined) {
            pathsArr.push([planet, nextPlanet]);
        }
    });
    (0, react_1.useEffect)(() => {
        let interval;
        if (priceListExpired === false) {
            interval = setInterval(() => {
                const currentTime = (0, moment_1.default)().utc();
                const validUntilDate = (0, moment_1.default)(validUntil);
                if (currentTime.isAfter(validUntilDate)) {
                    (0, toast_1.showToast)('warning', 'Price list has been updated. Please refresh the page.', false);
                    clearInterval(interval);
                    setPriceListExpired(() => true);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [priceListExpired]);
    return (<div className='path-providers'>
      {pathsArr.map((path, index) => (<div key={index}>
          <Path_1.default path={path}/>

          <ProviderList_1.default index={index} fullPath={fullPath} departure={path[0]} destination={path[1]}/>
        </div>))}

      <react_toastify_1.ToastContainer />
    </div>);
}
exports.default = index;
