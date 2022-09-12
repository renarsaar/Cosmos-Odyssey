"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const moment_1 = __importDefault(require("moment"));
function formatDate(date) {
    var _a;
    return (_a = (0, moment_1.default)(date).format('MMM D, h:mm A')) !== null && _a !== void 0 ? _a : '';
}
exports.formatDate = formatDate;
