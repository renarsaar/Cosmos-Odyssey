"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const AppRoutes_1 = __importDefault(require("./AppRoutes"));
const priceListSlice_1 = require("../state/priceList/priceListSlice");
const useRedux_1 = require("../hooks/useRedux");
const PageLoader_1 = __importDefault(require("./PageLoader"));
require("../assets/style.scss");
function App() {
    const dispatch = (0, useRedux_1.useAppDispatch)();
    const status = (0, useRedux_1.useAppSelector)(priceListSlice_1.selectStatus);
    (0, react_1.useEffect)(() => {
        dispatch((0, priceListSlice_1.getPriceList)());
    }, []);
    return (<>
      {status === 'Pending'
            ? <PageLoader_1.default type='fullscreen'/>
            : <AppRoutes_1.default />}
    </>);
}
exports.default = App;
