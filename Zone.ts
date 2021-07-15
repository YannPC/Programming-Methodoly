import { Card } from "./Card";
import { Door } from "./Doors";
import { DoorNorth } from "./DoorNorth";
import { DoorSouth } from "./DoorSouth";


export class Zone {
    name:string;
    capacity:number;

    //all cards in particular zone
    cards:Array<Card>

    constructor(name:string, capacity:number, cards:Array<Card>) {
        this.name = name;
        this.capacity = capacity;
        this.cards = cards;
    }
    
    public getCards = (): Array<Card> => this.cards;

    public isFull = (): boolean => {
        
        if(this.capacity < this.cards.length ){
            return false
        }else{
            return true
        }
    };
    
    public addCardToZone = (card: Card): void => {
        this.cards.push(card)
    };
 
}