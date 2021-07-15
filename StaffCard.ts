import { Card } from "./Card";
import { Door } from "./Doors";
import { DoorNorth } from "./DoorNorth";
import { DoorSouth } from "./DoorSouth";
import { Zone } from "./Zone";


export class StaffCard extends Card{
  setZone(zone0: Zone) {
      throw new Error("Method not implemented.");
  }
  private static currentId = 2000;
  private static employeeNumber:number;
  

  /**
   * Constructor for a Member's card
   * @param {string} memberName - member's name
   * @param {number} credits - inital number of credits
   * @param {number} employeeNumber 
   * @param {string} City - which City member registed
   * @param {string} type - type of the card (Staff ,Member)
   */
  constructor(
    memberName: string,
    credits: number,
    employeeNumber:number,
    type: string,
    City:string,

  ){
    super(credits,City, memberName, type="Staff")
    this.cardId = StaffCard.currentId++;
  }

  /**
   * @return {string} member's name
   */
  public getName = (): string => this.memberName;

  /**
   * @return {number} member's id
   */
  public getId = (): number => this.cardId;

  
  /**
   * adds credits to the member's card
   * @param {number} credits number of credits to be added
   */
  public addCredits = (credits: number): void => {
    this.credits += credits;
  };


  /**
   * @return {number} number of credits on the card
   */
  public getCredits = (): number => this.credits;
  /**
   * @return {number} number of credits on the card
   */


  /**
   * @return {boolean} true if a card has enough credits to pass throught the Door,
   * else false
   */
  public hasEnoughCredits = (): boolean => true;

  /**
   * @return {string} a String representation of the Staff card details
   */
  public toString = (): string =>
    "***Member Card***" +
    "\nCard No: " +
    this.cardId +
    "\nName: " +
    this.memberName +
    "\nCredits: " +
    this.credits +
    this.credits +
    "\nCity : " +
    this.City +
    "\n";
}