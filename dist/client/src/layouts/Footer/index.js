"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const github_svg_1 = __importDefault(require("../../assets/svg/github.svg"));
require("./footer.scss");
function index() {
    return (<footer>
      <h1>Author: Renar Saaremets</h1>

      <img src={github_svg_1.default} alt='Github'/>

      <a href="https://github.com/renarsaar/Cosmos-Odyssey" target="_blank" rel="noreferrer">
        github.com/renarsaar/Cosmos Odyssey
      </a>
    </footer>);
}
exports.default = index;
