"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./view/styles/index.css");
var App_1 = require("./view/App");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./store/redux/store");
var app = (<react_router_dom_1.BrowserRouter>
    <react_redux_1.Provider store={store_1.store}>
        <App_1["default"] />
    </react_redux_1.Provider>
    </react_router_dom_1.BrowserRouter>);
react_dom_1["default"].render(app, document.getElementById("root"));
