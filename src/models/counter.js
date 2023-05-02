"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
var Counter = /** @class */ (function () {
    function Counter(name, dastafchikDay) {
        this.name = name;
        this.dastafchikDay = dastafchikDay;
    }
    Counter.prototype.getCounterId = function () {
        return this.counterId;
    };
    Counter.prototype.setCounterId = function (counterID) {
        this.counterId = counterID;
    };
    return Counter;
}());
exports.Counter = Counter;
