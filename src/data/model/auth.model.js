"use strict";
exports.__esModule = true;
exports.Auth = void 0;
var Auth = /** @class */ (function () {
    function Auth(username, token) {
        this.username = username;
        this.token = token;
    }
    Object.defineProperty(Auth.prototype, "isAuthorized", {
        get: function () {
            return this.token != undefined;
        },
        enumerable: false,
        configurable: true
    });
    return Auth;
}());
exports.Auth = Auth;
