import * as readline from "readline";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const MINIMAL_TICKET_DISCOUNT: number = 3;
const DISCOUNT_PERCENTAGE: number = 0.1;

console.log("─────⇾ JEMJEM CINEMAS ⇽─────");
console.log(" ✷  CHOOSE YOUR MOVIE!  ✷");
console.log("001 GODZILLA MINUS ZERO     |  09.45");
console.log("002 TWILIGHT BREAKING DAWN  |  10.50");
console.log("003 MIDSOMMAR               |  11.00");
console.log("004 KUASA GELAP             |  11.35");
console.log("005 TROLLS 2                |  12.00");
console.log("─────────────────────────────");

rl.question("Choose a film to watch! (1/2/3/4/5): ", (MovieNumber: string) => {
    rl.question("How many tickets do you wish to buy?: ", (TicketQuantity: string) => {
        rl.question("Studio selection (1 = Reguler / 2 = Premier / 3 = IMAX): ", (StudioSelection: string) => {
           rl.question("Do you want to buy food and drinks? (Y/N): ", (FoodAndDrinks: string) => {
                let MovieChoosen: string = "";
                let ticketQuantity: number = parseInt(TicketQuantity);
                let studioSelection: number = parseInt(StudioSelection);
                let foodAndDrinks: string = FoodAndDrinks.toUpperCase();
                let validationsuccess: boolean = true;

                switch (MovieNumber) {
                    case "1":
                        MovieChoosen = "GODZILLA MINUS ZERO";
                        break;
                    case "2":
                        MovieChoosen = "TWILIGHT BREAKING DAWN";
                        break;
                    case "3":
                        MovieChoosen = "MIDSOMMAR";
                        break;
                    case "4":
                        MovieChoosen = "KUASA GELAP";
                        break;
                    case "5":
                        MovieChoosen = "TROLLS 2";
                        break;
                    default:
                        validationsuccess = false;
                        console.log("Invalid movie choice.");
                        break;
                }
        
            rl.close();
               
        });
    });
});
});