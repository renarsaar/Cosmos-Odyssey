"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
function index({ planet, height, width, top, left }) {
    const [searchParams, setSearchParams] = (0, react_router_dom_1.useSearchParams)();
    function onClick() {
        var _a, _b;
        const departure = (_a = searchParams.get('departure')) !== null && _a !== void 0 ? _a : '';
        const destination = (_b = searchParams.get('destination')) !== null && _b !== void 0 ? _b : '';
        const updatedSearchParams = new URLSearchParams(searchParams.toString());
        updatedSearchParams.set('departure', departure);
        updatedSearchParams.set('destination', destination);
        switch (true) {
            case (departure === planet):
                updatedSearchParams.set('departure', '');
                break;
            case (destination === planet):
                updatedSearchParams.set('destination', '');
                break;
            case (departure === ''):
                updatedSearchParams.set('departure', planet);
                break;
            case (destination === ''):
                updatedSearchParams.set('destination', planet);
                break;
            default:
                updatedSearchParams.set('destination', planet);
                break;
        }
        setSearchParams(updatedSearchParams.toString());
    }
    return (<div className='area' role={planet} onClick={onClick} style={{ height, width, top, left }}/>);
}
exports.default = index;
