// console.log('hello world');

// // Creo le variabili per chiedere all'utente età e i kilometri
// const kilometers = parseFloat(prompt('Inserisci i kilometri che vorresti percorrere:'));
// const age = parseInt(prompt('Inserisci la tua età:'));

// // Calcolo il prezzo base del biglietto
// let ticketPrice = kilometers * 0.21;

// // Creo una variabile per gli sconti
// let discount = 0;

// // Applico un istruzione per per fare lo sconto 
// if (age < 18) {
//     discount = (ticketPrice * 20) / 100;
//     ticketPrice = ticketPrice -discount; 

// } else if(age > 65) {
//     discount = (ticketPrice * 40) / 100;
//     ticketPrice = ticketPrice -discount; 

// }

// console.log(`Il prezzo finale del biglietto è: ${ticketPrice.toFixed(2)} €`);


// Cerco di evitare il refresh della pagina
document.getElementById('generateTicket').addEventListener('click', function (event) {
    event.preventDefault();
    // Creao le variabili per prendere i dati dell'utente dal dom

    const nameSurname = document.getElementById('nameSurname').value;
    const kilometers = document.getElementById('km').value;
    const ageCategory = document.getElementById('age').value;

    // Prezzo del biglietto

    let ticketPrice = kilometers * 0.21;
    let offer = 'Biglietto standard';

    // applico lo sconto in base alla fascia d'età, come fatto in precedenza copio ed incollo l'operazione

    if (ageCategory === 'Minorenne') {
        discount = (ticketPrice * 20) / 100; // Sconto 20% 
        ticketPrice = ticketPrice - discount;
        offer = 'Sconto Minorenni';

    } else if (ageCategory === 'over65') {
        discount = (ticketPrice * 40) / 100; // Sconto 40% 
        ticketPrice = ticketPrice - discount;
        offer = 'Sconto Over 65';
    }

    // stampo i dettagli dell'utente nella tabella

    document.getElementById('passengerName').textContent = nameSurname;
    document.getElementById('offer').textContent = offer;
    document.getElementById('ticketCost').textContent = ticketPrice.toFixed(2) + '€';

});


// Cerco di evitare  di nuovo il refresh della pagina
document.getElementById('cancel').addEventListener('click', function (event) {
    event.preventDefault();



// Aggiungo una funzione per il tasto Anulla per ressettare il valori della tabella

document.getElementById('nameSurname').value = '';
document.getElementById('km').value = '';
document.getElementById('age').value = 'Maggiorenne';

document.getElementById('passengerName').textContent = '';
document.getElementById('offer').textContent = 'Biglietto standard';
document.getElementById('ticketCost').textContent = '';

});



