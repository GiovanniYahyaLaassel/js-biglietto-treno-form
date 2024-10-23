console.log('hello world');

// Creo le variabili per chiedere all'utente età e i kilometri
const kilometers = parseFloat(prompt('Inserisci i kilometri che vorresti percorrere:'));
const age = parseInt(prompt('Inserisci la tua età:'));

// Calcolo il prezzo base del biglietto
let ticketPrice = kilometers * 0.21;

// Creo una variabile per gli sconti
let discount = 0;

// Applico un istruzione per per fare lo sconto 
if (age < 18) {
    discount = (ticketPrice * 20) / 100;
    ticketPrice = ticketPrice -discount; 

} else if(age > 65) {
    discount = (ticketPrice * 40) / 100;
    ticketPrice = ticketPrice -discount; 

}

console.log(`Il prezzo finale del biglietto è: ${ticketPrice.toFixed(2)} €`);