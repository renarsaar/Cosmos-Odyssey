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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const useRedux_1 = require("../../hooks/useRedux");
const providersSlice_1 = require("../../state/providers/providersSlice");
const priceListSlice_1 = require("../../state/priceList/priceListSlice");
const journeySlice_1 = require("../../state/journey/journeySlice");
const filterSlice_1 = require("../../state/filter/filterSlice");
const Select_1 = __importDefault(require("../Select"));
const constants_1 = require("../../utils/constants");
require("./style.scss");
function index() {
    const dispatch = (0, useRedux_1.useAppDispatch)();
    const routes = (0, useRedux_1.useAppSelector)(priceListSlice_1.selectRoutes);
    const providers = (0, useRedux_1.useAppSelector)(providersSlice_1.selectProviders);
    (0, react_1.useEffect)(() => {
        dispatch((0, providersSlice_1.setProviders)(routes !== null && routes !== void 0 ? routes : []));
    }, []);
    const companySortOptions = [
        { value: 'company', label: '' }
    ];
    providers.forEach((provider) => {
        companySortOptions.push({
            value: 'company',
            label: provider,
        });
    });
    function onChange(event) {
        const { value } = event.target;
        const label = event.target.options[event.target.selectedIndex].text;
        const obj = { label, value };
        if (value === 'distance') {
            dispatch((0, journeySlice_1.sortPossiblePaths)(obj));
        }
        else {
            dispatch((0, filterSlice_1.setFilters)(obj));
        }
    }
    return (<form className='route-list-filter'>
      <Select_1.default title='Company' name='companies' options={companySortOptions} onChange={onChange}/>
      <Select_1.default title='Filter' name='filters' options={constants_1.routesSortOptions} onChange={onChange}/>
    </form>);
}
exports.default = index;
