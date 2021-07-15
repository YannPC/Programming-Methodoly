import { Card } from "./Card";

export class DoorNorth {
    DoorNorthId:number;
    CardId: number;
    Cardcredits:number;
    EnoughCredits:number;

    
 
    constructor(doorId:number ,CardId: number ,Cardcredits:number ,  EnoughCredits:number ) {
        this.DoorNorthId = doorId;
        this.CardId = CardId;
        this.Cardcredits = Cardcredits;
        this.EnoughCredits = EnoughCredits;
      
    }


    public PassingDoorNorth = (): boolean => {
        
        if (this.Cardcredits < this.EnoughCredits){

            return false
        }else
        {
            return true
        }
    };


}
