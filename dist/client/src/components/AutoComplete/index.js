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
const react_router_dom_1 = require("react-router-dom");
const AutoCompleteList_1 = __importDefault(require("../AutoCompleteList"));
require("./style.scss");
function index({ suggestions, name, value }) {
    const [searchParams, setSearchParams] = (0, react_router_dom_1.useSearchParams)({});
    const [state, setState] = (0, react_1.useState)({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: value,
    });
    function setQueryParams(userInput) {
        const updatedSearchParams = new URLSearchParams(searchParams.toString());
        updatedSearchParams.set(name, userInput);
        setSearchParams(updatedSearchParams.toString());
    }
    function onChange(event) {
        const userInput = event.currentTarget.value;
        setQueryParams(userInput);
        const filteredSuggestions = suggestions.filter((suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
        setState(Object.assign(Object.assign({}, state), { filteredSuggestions, showSuggestions: true, userInput: event.currentTarget.value }));
    }
    ;
    function onClick(event) {
        const userInput = event.currentTarget.innerText;
        setQueryParams(userInput);
        setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput,
        });
    }
    function onKeyDown(event) {
        const { activeSuggestion, filteredSuggestions } = state;
        if (event.key === 'Enter') {
            setQueryParams(filteredSuggestions[activeSuggestion] || '');
            setState(Object.assign(Object.assign({}, state), { activeSuggestion: 0, showSuggestions: false, userInput: filteredSuggestions[activeSuggestion] }));
        }
        else if (event.key === 'ArrowUp') {
            if (activeSuggestion === 0) {
                return;
            }
            setState(Object.assign(Object.assign({}, state), { activeSuggestion: activeSuggestion - 1 }));
        }
        else if (event.key === 'ArrowDown') {
            if (activeSuggestion + 1 === filteredSuggestions.length) {
                return;
            }
            setState(Object.assign(Object.assign({}, state), { activeSuggestion: activeSuggestion + 1 }));
        }
    }
    ;
    return (<div className='auto-complete'>
      <input type="text" name={name} onChange={onChange} onKeyDown={onKeyDown} value={value}/>

      {state.showSuggestions && state.userInput && (<ul className='suggestions'>
          <AutoCompleteList_1.default filteredSuggestions={state.filteredSuggestions} activeSuggestion={state.activeSuggestion} onClick={onClick}/>
        </ul>)}
    </div>);
}
exports.default = index;
