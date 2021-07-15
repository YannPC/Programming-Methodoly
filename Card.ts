import { Door } from "./Doors";
import { DoorNorth } from "./DoorNorth";
import { DoorSouth } from "./DoorSouth";

import { Zone } from "./Zone";


/**
 * A card is used to move through a door (Door North of Door South).
 */
export class Card {
    protected cardId!: number;
    protected memberName:string;
    protected type:string;
    protected credits:number;
    protected City:String;
    protected employeeNumber!: number;


    constructor( credits:number, memberName:string,City:string, type:string) {
        this.credits = credits;
        this.memberName = memberName;
        this.type = type;
        this.City = City;

    }

    
    /**
     * @return {number} card id
     */
    // Get card id
     public getId = (): number => this.cardId;

    /**
     * @return {string} card type
     */
     public getType = (): string => this.type;


    public hasEnoughCredits = (): boolean => {
        return true
    };

    // get credits
    public getCredits = (): number => this.credits;

    // get name
    public getName = (): string => this.memberName;

}