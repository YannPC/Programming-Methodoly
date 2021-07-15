"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.StaffCard = void 0;
var Card_1 = require("./Card");
var StaffCard = /** @class */ (function (_super) {
    __extends(StaffCard, _super);
    /**
     * Constructor for a Member's card
     * @param {string} memberName - member's name
     * @param {number} credits - inital number of credits
     * @param {number} employeeNumber
     * @param {string} City - which City member registed
     * @param {string} type - type of the card (Staff ,Member)
     */
    function StaffCard(memberName, credits, employeeNumber, type, City) {
        var _this = _super.call(this, credits, City, memberName, type = "Staff") || this;
        /**
         * @return {string} member's name
         */
        _this.getName = function () { return _this.memberName; };
        /**
         * @return {number} member's id
         */
        _this.getId = function () { return _this.cardId; };
        /**
         * adds credits to the member's card
         * @param {number} credits number of credits to be added
         */
        _this.addCredits = function (credits) {
            _this.credits += credits;
        };
        /**
         * @return {number} number of credits on the card
         */
        _this.getCredits = function () { return _this.credits; };
        /**
         * @return {number} number of credits on the card
         */
        /**
         * @return {boolean} true if a card has enough credits to pass throught the Door,
         * else false
         */
        _this.hasEnoughCredits = function () { return true; };
        /**
         * @return {string} a String representation of the Staff card details
         */
        _this.toString = function () {
            return "***Member Card***" +
                "\nCard No: " +
                _this.cardId +
                "\nName: " +
                _this.memberName +
                "\nCredits: " +
                _this.credits +
                _this.credits +
                "\nCity : " +
                _this.City +
                "\n";
        };
        _this.cardId = StaffCard.currentId++;
        return _this;
    }
    StaffCard.prototype.setZone = function (zone0) {
        throw new Error("Method not implemented.");
    };
    StaffCard.currentId = 2000;
    return StaffCard;
}(Card_1.Card));
exports.StaffCard = StaffCard;
