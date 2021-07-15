"use strict";
exports.__esModule = true;
exports.Card = void 0;
/**
 * A card is used to move through a door (Door North of Door South).
 */
var Card = /** @class */ (function () {
    function Card(credits, memberName, City, type) {
        var _this = this;
        /**
         * @return {number} card id
         */
        // Get card id
        this.getId = function () { return _this.cardId; };
        /**
         * @return {string} card type
         */
        this.getType = function () { return _this.type; };
        this.hasEnoughCredits = function () {
            return true;
        };
        // get credits
        this.getCredits = function () { return _this.credits; };
        // get name
        this.getName = function () { return _this.memberName; };
        this.credits = credits;
        this.memberName = memberName;
        this.type = type;
        this.City = City;
    }
    return Card;
}());
exports.Card = Card;
