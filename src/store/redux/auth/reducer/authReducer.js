"use strict";
exports.__esModule = true;
exports.authReducer = void 0;
var types_1 = require("../types/types");
var initialState = { success: false, loading: false, error: null };
function setLocal(value) {
    if (value === void 0) { value = false; }
    return localStorage.setItem('auth', value.toString());
}
var authReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types_1.LOADING_AUTH:
            setLocal(false);
            return { loading: true, success: false, error: false };
        case types_1.SUCCESS_AUTH:
            setLocal(true);
            return { loading: false, success: true, error: false };
        case types_1.ERROR_AUTH:
            setLocal(false);
            return { loading: false, success: false, error: true };
        case types_1.LOGOUT:
            localStorage.clear();
            return { loading: false, success: false, error: null };
        default: return state;
    }
};
exports.authReducer = authReducer;
