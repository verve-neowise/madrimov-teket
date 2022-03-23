"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var network_model_1 = require("../model/network.model");
var authApi = require("../api/auth.api");
var authorincate = function (user) {
    return new rxjs_1.Observable(function (subscriber) {
        subscriber.next((0, network_model_1.loading)());
        authApi.authorincate(user)
            .then(function (res) {
            subscriber.next((0, network_model_1.success)(res));
        })["catch"](function (reason) {
            subscriber.next((0, network_model_1.error)(reason));
        });
    });
};
exports["default"] = {
    authorincate: authorincate
};
