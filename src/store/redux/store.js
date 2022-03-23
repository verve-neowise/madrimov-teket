"use strict";
exports.__esModule = true;
exports.store = void 0;
var redux_1 = require("redux");
var rootReducer_1 = require("./rootReducer");
var redux_thunk_1 = require("redux-thunk");
exports.store = (0, redux_1.createStore)(rootReducer_1.rootReducer, {}, (0, redux_1.applyMiddleware)(redux_thunk_1["default"]));
