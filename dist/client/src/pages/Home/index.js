"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Header_1 = __importDefault(require("../../layouts/Header"));
const Footer_1 = __importDefault(require("../../layouts/Footer"));
const ImageMap_1 = __importDefault(require("../../components/ImageMap"));
const SelectPathsForm_1 = __importDefault(require("../../components/SelectPathsForm"));
const PossiblePaths_1 = __importDefault(require("../../components/PossiblePaths"));
require("./style.scss");
const react_toastify_1 = require("react-toastify");
function index() {
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
