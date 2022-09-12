"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./style.scss");
function index({ filteredSuggestions, activeSuggestion, onClick }) {
    return (<>
      {filteredSuggestions.map((suggestion, index) => (<li key={suggestion} className={index === activeSuggestion
                ? 'suggestion active'
                : 'suggestion'} onClick={onClick}>
          {suggestion}
        </li>))}
    </>);
}
exports.default = index;
