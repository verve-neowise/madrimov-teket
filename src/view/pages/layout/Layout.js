"use strict";
exports.__esModule = true;
exports.Layout = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var Sidebar_1 = require("../../components/sidebar/Sidebar");
var Layout = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    return (<div>
      <Sidebar_1["default"] />
    </div>);
};
exports.Layout = Layout;
