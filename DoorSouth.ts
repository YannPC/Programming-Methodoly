import { Card } from "./Card";

export class DoorSouth {
    DoorSouthId:number;
    CardId: number;
    Cardcredits:number;
    EnoughCredits:number;

    
 
    constructor(doorId:number ,CardId: number ,Cardcredits:number ,  EnoughCredits:number ) {
        this.DoorSouthId = doorId;
        this.CardId = CardId;
        this.Cardcredits = Cardcredits;
        this.EnoughCredits = EnoughCredits;
      
    }


    public PassingDoorSouth = (): boolean => {
        
        if (this.Cardcredits > this.EnoughCredits){

            return true
        }else
        {
            return false
        }
    };


}
