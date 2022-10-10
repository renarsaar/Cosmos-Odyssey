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
const journeySlice_1 = __importStar(require("../../state/journey/journeySlice"));
const priceListSlice_1 = __importStar(require("../../state/priceList/priceListSlice"));
const testLegs_1 = require("../../utils/testLegs");
const react_1 = require("@testing-library/react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const store_1 = require("../../state/store");
const App_1 = __importDefault(require("../App"));
describe('Return possible route list', () => {
    (0, react_1.render)(<react_redux_1.Provider store={store_1.store}>
      <react_router_dom_1.BrowserRouter>
        <App_1.default />
      </react_router_dom_1.BrowserRouter>
    </react_redux_1.Provider>);
    const journeyInitialState = {
        possiblePaths: [],
        showPaths: false,
    };
    const priceListInitialState = {
        id: null,
        validUntil: null,
        legs: [],
        status: null,
    };
    it('renders path-list container', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, priceListSlice_1.default)(priceListInitialState, { type: priceListSlice_1.getPriceList });
        const earthBtn = yield react_1.screen.findByRole('Earth');
        const jupiterBtn = yield react_1.screen.findByRole('Jupiter');
        react_1.fireEvent.click(earthBtn);
        react_1.fireEvent.click(jupiterBtn);
        const findRoutesBtn = yield react_1.screen.findByRole('find-routes', {
            name: /find routes/i
        });
        react_1.fireEvent.click(findRoutesBtn);
        (0, journeySlice_1.default)(journeyInitialState, (0, journeySlice_1.findPossiblePaths)({
            routes: testLegs_1.testLegs,
            departure: 'Earth',
            destination: 'Jupiter',
        }));
        const pathListContainer = yield react_1.screen.findByRole('path-list');
        expect(pathListContainer).toBeInTheDocument();
    }));
    // it('should return the initial state', () => {
    //   expect(journeySlice(undefined, { type: undefined })).toEqual(initialState);
    // });
});
