"use strict";
exports.__esModule = true;
exports.Zone = void 0;
var Zone = /** @class */ (function () {
    function Zone(name, capacity, cards) {
        var _this = this;
        this.getCards = function () { return _this.cards; };
        this.isFull = function () {
            if (_this.capacity < _this.cards.length) {
                return false;
            }
            else {
                return true;
            }
        };
        this.addCardToZone = function (card) {
            _this.cards.push(card);
        };
        this.name = name;
        this.capacity = capacity;
        this.cards = cards;
    }
    return Zone;
}());
exports.Zone = Zone;
