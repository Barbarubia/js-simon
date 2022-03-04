/*
Esercizio di oggi: Simon Says
nome repo: js-simon
Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

const numRandomSize = 5;    // quantità di numeri random da generare
const numRandomMin = 1;     // valore minimo dei numeri random
const numRandomMax = 99;    // valore massimo dei numeri random
const arrayNumRandom = [];  // array dei numeri random, inizialmente vuoto, da popolare
const eleShowNumbers = document.getElementById('show-numbers-timeout');     // elemento dom che contiene la visualizzazione dei numeri random
const timeoutDuration = 3 * 1000;      // 30 secondi convertito in millisecondi
// FIXME: resettare a 30 secondi quando funziona tutto
let arrayPlayerNumbers = [];    // array dei numeri digitati dal giocatore, inizialmente vuoto, da popolare
let arrayNumeriIndovinati = []; // array dei numeri indovinati dal giocatore, inizialmente vuoto

eleShowNumbers.innerHTML = `${numRandomGenerator()}`;       // visualizzazione numeri random nella pagina html
let scoreCounter = 0        // variabile che conta i numeri indovinati e incrementa il punteggio


setTimeout(hideNumbers, timeoutDuration);       // nascondo i numeri random dopo il tempo stabilito
// FIXME: è ancora possibile continuare a vedere i numeri random nell'inspector
// => FIXED!

setTimeout(playGame, timeoutDuration + 1000);        // chiedo al giocatore di inserire i numeri e verifico quanti ne ha indovinati
// ho aggiunto 1000 per evitare che il browser esegua questa funzione prima di far sparire i numeri

// Valutare se è meglio fare un'unica funzione che, trascorso il tempo limite, nasconde i numeri random e avvia il gioco


// Funzione che genera 5 numeri random senza ripetizioni
function numRandomGenerator(min, max) {
    min = numRandomMin;
    max = numRandomMax;

    while (arrayNumRandom.length < numRandomSize) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        if (!arrayNumRandom.includes(randomNumber)) {
            arrayNumRandom.push(randomNumber);
        }
    }

    return arrayNumRandom;
}
// TEST FUNZIONE
console.log(numRandomGenerator());


// Funzione che nasconde i numeri random dopo il tempo stabilito
function hideNumbers() {
    eleShowNumbers.innerHTML = "";
    eleShowNumbers.classList.add('display-none');
    // svuoto l'elemento che contiene i numeri così li cancello dall'inspector
}

// Funzione che chiede al giocatore di inserire i numeri e controlla quanti ne ha indovinati
function playGame() {
    for (let promptIndex = 1; promptIndex <= numRandomSize; promptIndex++) {
        let playerNumber = prompt(`Digita il ${promptIndex}° numero che hai visualizzato`);
        // Inserisco il valore digitato nell'array dei numeri del giocatore
        // Volontariamente consento di inserire più volte lo stesso numero o caratteri diversi da numeri
        arrayPlayerNumbers.push(playerNumber);
    }
    // TEST
    console.log(arrayPlayerNumbers);

    for (let i = 0; i < arrayPlayerNumbers.length; i++) {
        if (arrayNumRandom.includes(parseInt(arrayPlayerNumbers[i]))) {
            arrayNumeriIndovinati.push(arrayPlayerNumbers[i])
            scoreCounter++;
        }
    }
    let NumeriIndovinati = `(${arrayNumeriIndovinati})`;
    eleShowNumbers.classList.remove('display-none');
    eleShowNumbers.innerHTML = `Hai indovinato ${scoreCounter} numeri!<br>${NumeriIndovinati}`;
    // FIXME: se il giocatore digita più volte lo stesso numero esatto incrementa il contatore
    return scoreCounter;

    // TODO: giocatore deve indovinare i numeri nella giusta posizione
}