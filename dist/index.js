"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const MINIMAL_TICKET_DISCOUNT = 3;
const DISCOUNT_PERCENTAGE = 0.1;
console.log("─────⇾ JEMJEM CINEMAS ⇽─────");
console.log(" ✷  CHOOSE YOUR MOVIE!  ✷");
console.log("001 GODZILLA MINUS ZERO     |  09.45");
console.log("002 TWILIGHT BREAKING DAWN  |  10.50");
console.log("003 MIDSOMMAR               |  11.00");
console.log("004 KUASA GELAP             |  11.35");
console.log("005 TROLLS 2                |  12.00");
console.log("─────────────────────────────");
rl.question("Choose a film to watch! (1/2/3/4/5): ", (MovieNumber) => {
    rl.question("How many tickets do you wish to buy?: ", (TicketQuantity) => {
        rl.question("Studio selection (1 = Reguler / 2 = Premier / 3 = IMAX): ", (StudioSelection) => {
            rl.question("Do you want to buy food and drinks? (Y/N): ", (FoodAndDrinks) => {
                let MovieChoosen = "";
                let ticketQuantity = parseInt(TicketQuantity);
                let studioSelection = parseInt(StudioSelection);
                let foodAndDrinks = FoodAndDrinks.toUpperCase();
                let validationsuccess = true;
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
//# sourceMappingURL=index.js.map