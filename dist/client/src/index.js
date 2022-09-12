"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("./state/store");
const App_1 = __importDefault(require("./components/App"));
require("./assets/style.scss");
const container = document.getElementById('root');
const root = (0, client_1.createRoot)(container);
root.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_1.store}>
      <react_router_dom_1.BrowserRouter>
        <App_1.default />
      </react_router_dom_1.BrowserRouter>
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
