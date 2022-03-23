"use strict";
exports.__esModule = true;
var network_model_1 = require("./data/model/network.model");
var user_model_1 = require("./data/model/user.model");
var auth_repository_1 = require("./data/repository/auth.repository");
auth_repository_1["default"].authorincate(new user_model_1.User("username", "1234"))
    .subscribe(function (observer) {
        
    if (observer.status === network_model_1.Status.LOADING) {
        console.log("loading");
    }
    else if (observer.status === network_model_1.Status.ERROR) {
        console.log(observer.error);
    }
    else {
        console.log(observer.value);
    }
});
