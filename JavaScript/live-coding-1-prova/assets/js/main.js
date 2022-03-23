// Variabile Constante
// Ha bisogno immediatamente di una dichiarazione, diversamente da let 

const username = 'Alessandro'

console.log(username);

// Definizione Variabile - Let

// Dichiarazione
let userAge;
// Inizializzazione
userAge = 26;
// Console Log
console.log(userAge);

// Inizializzazione e dichiarazione
let lastName = 'Pecorilla'
// Console Log
console.log(lastName);

document.getElementById('user').innerHTML = username;

// Concatenazione Nome + cognome 

// Tutto attaccato
console.log("Alessandro" + "Pecorilla");
// Staccato
console.log("Alessandro"+ " " +"Pecorilla");

// Template Literals
const firstname = 'Alessandro';
const lastname = 'Pecorilla';

const full_name = firstname + ' ' + lastname;
// Prima console
console.log(full_name);
// Seconda con Literals
console.log(`${firstname} ${lastname}`); 

// Variabili (let) per le divisioni

// Somma
let somma = 4 + 4;
// Sottrazione
let Sottrazione = somma - 3;
// Divisione
let Divisione = somma / 2;
// Moltiplicazione
let Moltiplicazione = somma * 2;
console.log(`${somma} ${Sottrazione} ${Divisione} ${Moltiplicazione}`); 

// Interazione con utente tramite Prompt - genera una stringa, non un numero. in questo caso devi lasciargli detto di essere un numero.
// Esce un popup dove l'utente interagisce
const favourite_film = prompt('Scrivi il tuo film preferito');

// Qui lo vedi in console
console.log(favourite_film);

// Questo permette di far visualizzare nel file index, in base all'id del div il film preferito
document.getElementById('movie').innerHTML = favourite_film;

// ESEMPIO LIVE CODING

// Domanda da chiedere all'utente , qua è un numero quindi lo trasformiamo come tale
const age = Number(prompt('Quanti anni hai'));
// Risposta nella console log
console.log(age);

// Comunica anno di nascita, (è un numero non servono virgolette perchè senno sarebbe stringa) 

// trovare l'anno attuale.
const current_year = 2022;
// All'anno attuale sottraiamo l'eta.
const birth = current_year - age;
// Nel log uscirà questo
console.log(`Ciao sei nato il ${birth}`);
// Alert che esce a schermo
document.getElementById('movie').innerHTML = birth; 