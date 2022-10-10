"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
const toast_1 = require("../../lib/toast");
const useRedux_1 = require("../../hooks/useRedux");
const journeySlice_1 = require("../../state/journey/journeySlice");
const cartSlice_1 = require("../../state/cart/cartSlice");
const filterSlice_1 = require("../../state/filter/filterSlice");
const Header_1 = __importDefault(require("../../layouts/Header"));
const Footer_1 = __importDefault(require("../../layouts/Footer"));
const ImageMap_1 = __importDefault(require("../../components/ImageMap"));
const SelectPathsForm_1 = __importDefault(require("../../components/Forms/SelectPathsForm"));
const PossiblePaths_1 = __importDefault(require("../../components/PossiblePaths"));
require("./style.scss");
function index() {
    const dispatch = (0, useRedux_1.useAppDispatch)();
    const location = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(() => {
        if (location.state !== null) {
            const { reservationMessage } = location.state;
            (0, toast_1.showToast)('success', reservationMessage !== null && reservationMessage !== void 0 ? reservationMessage : '', 10000);
            window.history.replaceState(undefined, document.title);
            dispatch((0, cartSlice_1.resetCart)());
            dispatch((0, journeySlice_1.resetJourney)());
            dispatch((0, filterSlice_1.resetFilters)());
        }
    }, []);
    return (<div className='home'>
      <Header_1.default />

      <div className='container'>
        <div className='components'>
          <SelectPathsForm_1.default />
          <PossiblePaths_1.default />
          <ImageMap_1.default />
        </div>
      </div>

      <Footer_1.default />

      <react_toastify_1.ToastContainer />
    </div>);
}
exports.default = index;
