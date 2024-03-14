function checkPlusEven (num1,num2){
    let somma = num1+num2;
    if(somma % 2 == 0){
       return true;
    }
    else{
       return false;
    }
   }
   

// let input = document.getElementById('input73');
// let btn = document.getElementById('btn-submit37');
// let divRisposta = document.getElementById('risposta');
//! verifica se una parola e' palindroma (funzione nelle utilitis)

let parola = prompt('dammi una parola');
let risultato = checkPalindrome(parola);
console.log(risultato);

//! verifica se la somma di due numeri e' pari o dispari

const min = 1;
const max = 5;
do{
    let num = parseInt(prompt('damme un numero tra 1 e 5'));
}while((num > max)||(num < min))

let numPc = getRndInteger(min, max);
let scelta = prompt('scegli pari o dispari');
if ((scelta === 'pari' && checkPlusEven(num,numPc))||(scelta === 'dispari' && !(checkPlusEven(num,numPc)))){
    console.log('hai vinto');
}
else{
    console.log('hai perso');
}
