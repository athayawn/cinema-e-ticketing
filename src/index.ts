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

rl.question("Choose a film to watch! (1/2/3/4/5): ", (FilmNumber: string) => {
    rl.question("How many tickets do you wish to buy?: ", (TicketQuantity: string) => {

        let Tickets: number = Number(TicketQuantity);
        let MovieChoosen: string = "";
        let ValidationSuccess: boolean = true;
    })

})