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

const generateNumbers = () => {
    for (let i = 0; i < 5; i++) {
        numbers.push(randomNumber(1, 100));
    }
    alert('I numeri sono: ' + numbers);
    return numbers;
};
//La funzione chiede all'utente di inserire un numero 5 volte, dopodiche inserisco in un nuovo array i numeri corretti
const userNumber = () => {
    const correctNumbers = [];
    for (let i = 0; i < 5; i++) {
        let userNumber = (prompt('Inserisci i numeri comparsi precedentemente: '));
        if (numbers.includes(userNumber) === true) correctNumbers.push(userNumber);
        console.log('I numeri corretti sono: ' + correctNumbers);
    }
    if (correctNumbers === '') alert('Non hai indovinato nessun numero!');
};
//Utilizzo i numeri inseriti dall'utente, nella funzione setTimout()
const userAnswer = () => userNumber();
//Controllo quanti e quali numeri sono stati indovinati dall'utente
// const isValid = (array) => (array => array.includes(this)) ? true : false;
// ??ELEMENTI DA UTILIZZARE
let numbers = [];

// !ESECUZIONE PROGRAMMA
//Genero i numeri casuali
generateNumbers();
console.log('I numeri generati casualmente sono: ' + numbers);
//Imposto il tempo di attivazione della funzione richiamata
setTimeout(userAnswer, 300);