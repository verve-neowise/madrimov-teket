"use strict";
exports.__esModule = true;
exports.useTypedSelector = exports.rootReducer = void 0;
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var authReducer_1 = require("./auth/reducer/authReducer");
var themeReducer_1 = require("./theme/reducer/themeReducer");
exports.rootReducer = (0, redux_1.combineReducers)({
    auth: authReducer_1.authReducer,
    theme: themeReducer_1.themeReducer
});
exports.useTypedSelector = react_redux_1.useSelector;
