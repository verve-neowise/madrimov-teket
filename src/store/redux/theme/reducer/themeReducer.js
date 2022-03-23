"use strict";
exports.__esModule = true;
exports.themeReducer = void 0;
var types_1 = require("../types/types");
var initialState = 'light';
function setLocal(value) {
    localStorage.setItem('theme', value);
}
var themeReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types_1.DARK_THEME:
            setLocal('dark');
            return 'dark';
        case types_1.LIGHT_THEME:
            setLocal('light');
            return 'light';
        default: return state;
    }
};
exports.themeReducer = themeReducer;
