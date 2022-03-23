"use strict";
exports.__esModule = true;
exports.Status = exports.loading = exports.error = exports.success = exports.Network = void 0;
var Network = /** @class */ (function () {
    function Network(value, error, status) {
        this._value = value;
        this._error = error;
        this.status = status ? status : Status.SUCCESS;
    }
    Object.defineProperty(Network.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "error", {
        get: function () {
            return this._error;
        },
        enumerable: false,
        configurable: true
    });
    return Network;
}());
exports.Network = Network;
function success(value) {
    return new Network(value, '', Status.SUCCESS);
}
exports.success = success;
function error(error) {
    return new Network(undefined, error, Status.ERROR);
}
exports.error = error;
function loading() {
    return new Network(undefined, '', Status.LOADING);
}
exports.loading = loading;
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["SUCCESS"] = 1] = "SUCCESS";
    Status[Status["ERROR"] = 2] = "ERROR";
})(Status = exports.Status || (exports.Status = {}));
