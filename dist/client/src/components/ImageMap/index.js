"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ImageMapArea_1 = __importDefault(require("../ImageMapArea"));
const ImapeMapTip_1 = __importDefault(require("../ImapeMapTip"));
require("./style.scss");
const solarsystem_jpg_1 = __importDefault(require("../../assets/images/solarsystem.jpg"));
const planetsPositioning = {
    Mercury: {
        width: 20,
        height: 20,
        top: 217,
        left: 275,
    },
    Venus: {
        width: 42,
        height: 42,
        top: 227,
        left: 344,
    },
    Earth: {
        width: 48,
        height: 48,
        top: 250,
        left: 442,
    },
    Mars: {
        width: 30,
        height: 30,
        top: 326,
        left: 510,
    },
    Jupiter: {
        width: 76,
        height: 76,
        top: 296,
        left: 587,
    },
    Saturn: {
        width: 68,
        height: 68,
        top: 272,
        left: 718,
    },
    Uranus: {
        width: 52,
        height: 52,
        top: 359,
        left: 832,
    },
    Neptune: {
        width: 54,
        height: 54,
        top: 377,
        left: 956,
    }
};
function index() {
    return (<div className='image-map'>
      <ImapeMapTip_1.default />

      <div className='map'>
        {Object.keys(planetsPositioning).map((planet, index) => (<ImageMapArea_1.default key={index} planet={planet} {...planetsPositioning[planet]}/>))}

        <img src={solarsystem_jpg_1.default} alt="Planets"/>
      </div>
    </div>);
}
exports.default = index;
