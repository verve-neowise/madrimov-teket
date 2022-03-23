"use strict";
exports.__esModule = true;
exports.lightTheme = exports.darkTheme = void 0;
var types_1 = require("../types/types");
var darkTheme = function () {
    return {
        type: types_1.DARK_THEME
    };
};
exports.darkTheme = darkTheme;
var lightTheme = function () {
    return {
        type: types_1.LIGHT_THEME
    };
};
exports.lightTheme = lightTheme;
