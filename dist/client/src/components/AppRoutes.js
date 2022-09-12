"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("../pages/Home"));
const CreateReservation_1 = __importDefault(require("../pages/CreateReservation"));
function AppRoutes() {
    return (<react_router_dom_1.Routes>
      <react_router_dom_1.Route index element={<Home_1.default />}/>
      <react_router_dom_1.Route path='/reservations/create' element={<CreateReservation_1.default />}/>
    </react_router_dom_1.Routes>);
}
exports.default = AppRoutes;
