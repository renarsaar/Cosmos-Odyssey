"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAxios = exports.getAxios = void 0;
const axios_1 = __importDefault(require("axios"));
const headers = { 'Content-Type': 'application/json' };
function getAxios(url, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield axios_1.default.get(url, {
            params,
            headers,
        })
            .then((response) => response.data);
    });
}
exports.getAxios = getAxios;
function postAxios(url, body) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield axios_1.default.post(url, body)
            .then((response) => response.data);
    });
}
exports.postAxios = postAxios;
