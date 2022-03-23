"use strict";
exports.__esModule = true;
exports.asyncAuthAction = exports.asyncLogoutAuthAction = void 0;
var user_api_1 = require("../../../apis/user.api");
var types_1 = require("../types/types");
var authAction = function (type) {
    return {
        type: type
    };
};
var logoutAction = function () {
    return {
        type: types_1.LOGOUT
    };
};
var asyncLogoutAuthAction = function () {
    return function (dispatch) {
        dispatch(logoutAction());
    };
};
exports.asyncLogoutAuthAction = asyncLogoutAuthAction;
var asyncAuthAction = function (username, password) {
    return function (dispatch) {
        dispatch(authAction(types_1.LOADING_AUTH));
        (0, user_api_1.athorincate)(username, password).then(function () { return dispatch(authAction(types_1.SUCCESS_AUTH)); })["catch"](function () { return dispatch(authAction(types_1.ERROR_AUTH)); });
    };
};
exports.asyncAuthAction = asyncAuthAction;
