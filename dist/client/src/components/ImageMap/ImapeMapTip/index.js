"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const light_bulb_svg_1 = __importDefault(require("../../../assets/svg/light-bulb.svg"));
function index() {
    const [showTip, setShowTip] = (0, react_1.useState)(localStorage.getItem('showTip') || '');
    function hideTip() {
        localStorage.setItem('showTip', JSON.stringify(false));
        setShowTip('false');
    }
    return (<>
      {showTip !== 'false' && (<div className="tip">
          <div>
            <b>Tip: </b>
            Clicking on the Planet will set Departure/Destination
            <img src={light_bulb_svg_1.default} alt="Light Bulb"/>
          </div>

          <button type='button' onClick={hideTip}>X</button>
        </div>)}
    </>);
}
exports.default = index;
