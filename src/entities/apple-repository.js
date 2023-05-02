"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppleRepository = void 0;
var AppleRepository = /** @class */ (function () {
    function AppleRepository() {
        this.list = [];
        this.id = 0;
    }
    AppleRepository.prototype.importApple = function (apple) {
        if (this.isExist(apple)) {
            throw new Error("Apple is already exists");
        }
        else {
            apple.setId(this.id++);
            this.list.push(apple);
        }
    };
    AppleRepository.prototype.isExist = function (newApple) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var apple = _a[_i];
            if (apple.color === newApple.color) {
                return true;
            }
            else
                return false;
        }
    };
    AppleRepository.prototype.getList = function () {
        return this.list;
    };
    return AppleRepository;
}());
exports.AppleRepository = AppleRepository;
