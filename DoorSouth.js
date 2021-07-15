"use strict";
exports.__esModule = true;
exports.DoorSouth = void 0;
var DoorSouth = /** @class */ (function () {
    function DoorSouth(doorId, CardId, Cardcredits, EnoughCredits) {
        var _this = this;
        this.PassingDoorSouth = function () {
            if (_this.Cardcredits > _this.EnoughCredits) {
                return true;
            }
            else {
                return false;
            }
        };
        this.DoorSouthId = doorId;
        this.CardId = CardId;
        this.Cardcredits = Cardcredits;
        this.EnoughCredits = EnoughCredits;
    }
    return DoorSouth;
}());
exports.DoorSouth = DoorSouth;
