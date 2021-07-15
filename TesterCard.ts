import { Card } from "./Card";
import { Door } from "./Doors";
import { DoorNorth } from "./DoorNorth";
import { DoorSouth } from "./DoorSouth";
import { MemberCard } from "./MemberCard";
import { StaffCard } from "./StaffCard";
import { Zone } from "./Zone";


export class Tester {

    constructor() {
        this.createCentre()
    
    }

    // Create part
    public createCentre = (): void => {
          
        
        var zone0 = new Zone("Outside",50,[])
        var zone1 = new Zone("Reception",100,[])
      
        let zonesArray = [zone0,zone1]


        var card1 = new MemberCard("John",3,7,"Krakow","Member")
        var card2 = new MemberCard("Peter",1,12,"Krakow","Member",)
    
        var card3 = new StaffCard("Pete", 10, 5,"Krakow", "Staff")
        var card4 = new StaffCard("Chen", 10, 5,"Krakow","Staff")

        let cardsArray = [card1, card2, card3, card4]


        // Outside -> Reception
        var DoorNorth = new Door(50)

        // Reception -> Outside
        var DoorSouth= new Door(100)

    
    };

    
}



var card1 = new MemberCard("John",3,7,"Krakow","Member")
var card2 = new MemberCard("Peter",1,12,"Krakow","Member",)

var card3 = new StaffCard("Pete", 10, 5,"Krakow", "Staff")
var card4 = new StaffCard("Chen", 10, 5,"Krakow","Staff")
 
let cardsArray = [card1, card2, card3, card4,]

 
var zone0 = new Zone("Outside",0,cardsArray)
var zone1 = new Zone ("Reception",1,[])

 
let zonesArray = [zone0,zone1]

// set zones for cards

card1.setZone(zone0)
card2.setZone(zone0)
card3.setZone(zone1)
card4.setZone(zone1)


 
// Outside -> Reception
var Door0 = new Door(0)
 
// Reception -> Outside
var Door1 = new Door(1)
 
 
let doorsArray = [Door0, Door1, ]

 