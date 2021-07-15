"use strict";
exports.__esModule = true;
exports.DoorNorth = void 0;
var DoorNorth = /** @class */ (function () {
    function DoorNorth(doorId, CardId, Cardcredits, EnoughCredits) {
        var _this = this;
        this.PassingDoorNorth = function () {
            if (_this.Cardcredits < _this.EnoughCredits) {
                return false;
            }
            else {
                return true;
            }
        };
        this.DoorNorthId = doorId;
        this.CardId = CardId;
        this.Cardcredits = Cardcredits;
        this.EnoughCredits = EnoughCredits;
    }
    return DoorNorth;
}());
exports.DoorNorth = DoorNorth;
