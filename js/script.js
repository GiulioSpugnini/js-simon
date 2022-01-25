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

const numbers = [];
const generateNumbers = () => {
    while (numbers.length < 5) {
        let randomNum = randomNumber(1, 100);
        if (!numbers.includes(randomNum)) numbers.push(randomNum);;
    }
    alert('I numeri sono: ' + numbers);
    return numbers;
};
//La funzione chiede all'utente di inserire un numero 5 volte, dopodiche inserisco in un nuovo array i numeri corretti
const userNumber = () => {
    console.log(numbers);
    const correctNumbers = [];
    const userNumbers = [];
    while (userNumbers.length < 5) {
        let userNumber = parseInt(prompt('Inserisci i numeri comparsi precedentemente: ').trim());
        if (userNumbers.includes(userNumber)) {
            alert('Hai già scelto questo numero');
        } else {

            userNumbers.push(userNumber);
            if (numbers.includes(userNumber)) {
                correctNumbers.push(userNumber);
            }
        }
    }
    console.log('I numeri corretti sono: ' + correctNumbers);
    if (correctNumbers.length === 0) alert('Non hai indovinato nessun numero!');
    else(alert(`Hai indovinato ${correctNumbers.length} numeri :  ${correctNumbers})`));
};
//Utilizzo i numeri inseriti dall'utente, nella funzione setTimout()
const userAnswer = () => userNumber();
//Controllo quanti e quali numeri sono stati indovinati dall'utente

// ??ELEMENTI DA UTILIZZARE

// !ESECUZIONE PROGRAMMA
//Genero i numeri casuali
generateNumbers();
console.log('I numeri generati casualmente sono: ' + numbers);
//Imposto il tempo di attivazione della funzione richiamata
setTimeout(userAnswer, 3000);