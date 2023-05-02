"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterRepository = void 0;
var CounterRepository = /** @class */ (function () {
    function CounterRepository() {
        this.list = [];
        this.id = 0;
    }
    CounterRepository.prototype.counters = function (counter) {
        if (this.isExist(counter)) {
            throw new Error("Counters already exist");
        }
        else {
            counter.setCounterId(this.id++);
            this.list.push(counter);
        }
    };
    CounterRepository.prototype.isExist = function (newCounter) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var counter = _a[_i];
            if (counter.name === newCounter.name) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    CounterRepository.prototype.getList = function () {
        return this.list;
    };
    return CounterRepository;
}());
exports.CounterRepository = CounterRepository;
