"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showToast = void 0;
const react_toastify_1 = require("react-toastify");
function showToast(type, message, autoClose) {
    (0, react_toastify_1.toast)(message, {
        type,
        position: "top-right",
        autoClose,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        progress: undefined,
    });
}
exports.showToast = showToast;
