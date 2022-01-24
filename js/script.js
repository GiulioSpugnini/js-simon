/*
Descrizione:
    Generare 5 numeri casuali e mostrarli in un alert all'utente.
    Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
    controllare che i numeri casuali siano diversi tra loro
    controllare che l'utente non inserisca 2 volte lo stesso numero
*/
// #FUNZIONI
const randomNumber = ((min, max) => Math.floor(Math.random() * (max - min + 1)) + min);

const generateNumber = () => {
    let numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(randomNumber(1, 100));
    }
    alert('I numeri sono:' + numbers);
}

// ??ELEMENTI DA UTILIZZARE


// !ESECUZIONE PROGRAMMA
generateNumber();