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
const arrayNumRandom = [];  // array dei numeri random, inizialmente vuota, da popolare
const eleShowNumbers = document.getElementById('show-numbers-timeout');     // elemento dom che contiene la visualizzazione dei numeri random

eleShowNumbers.innerHTML = `${numRandomGenerator()}`;       // visualizzazione numeri random nella pagina html


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