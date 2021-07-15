"use strict";
exports.__esModule = true;
exports.Tester = void 0;
var Doors_1 = require("./Doors");
var MemberCard_1 = require("./MemberCard");
var StaffCard_1 = require("./StaffCard");
var Zone_1 = require("./Zone");
var Tester = /** @class */ (function () {
    function Tester() {
        // Create part
        this.createCentre = function () {
            var zone0 = new Zone_1.Zone("Outside", 50, []);
            var zone1 = new Zone_1.Zone("Reception", 100, []);
            var zonesArray = [zone0, zone1];
            var card1 = new MemberCard_1.MemberCard("John", 3, 7, "Krakow", "Member");
            var card2 = new MemberCard_1.MemberCard("Peter", 1, 12, "Krakow", "Member");
            var card3 = new StaffCard_1.StaffCard("Pete", 10, 5, "Krakow", "Staff");
            var card4 = new StaffCard_1.StaffCard("Chen", 10, 5, "Krakow", "Staff");
            var cardsArray = [card1, card2, card3, card4];
            // Outside -> Reception
            var DoorNorth = new Doors_1.Door(50);
            // Reception -> Outside
            var DoorSouth = new Doors_1.Door(100);
        };
        this.createCentre();
    }
    return Tester;
}());
exports.Tester = Tester;
var card1 = new MemberCard_1.MemberCard("John", 3, 7, "Krakow", "Member");
var card2 = new MemberCard_1.MemberCard("Peter", 1, 12, "Krakow", "Member");
var card3 = new StaffCard_1.StaffCard("Pete", 10, 5, "Krakow", "Staff");
var card4 = new StaffCard_1.StaffCard("Chen", 10, 5, "Krakow", "Staff");
var cardsArray = [card1, card2, card3, card4,];
var zone0 = new Zone_1.Zone("Outside", 0, cardsArray);
var zone1 = new Zone_1.Zone("Reception", 1, []);
var zonesArray = [zone0, zone1];
// set zones for cards
card1.setZone(zone0);
card2.setZone(zone0);
card3.setZone(zone1);
card4.setZone(zone1);
// Outside -> Reception
var Door0 = new Doors_1.Door(0);
// Reception -> Outside
var Door1 = new Doors_1.Door(1);
var doorsArray = [Door0, Door1,];
