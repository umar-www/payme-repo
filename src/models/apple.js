"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apple = void 0;
var Apple = /** @class */ (function () {
    function Apple(color, price) {
        this.color = color;
        this.price = price;
    }
    Apple.prototype.getId = function () {
        return this.id;
    };
    Apple.prototype.setId = function (value) {
        this.id = value;
    };
    return Apple;
}());
exports.Apple = Apple;
