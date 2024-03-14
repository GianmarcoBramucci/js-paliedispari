function checkPlusEven (num1,num2){
    let somma = num1+num2;
    if(somma % 2 == 0){
       return true;
    }
    else{
       return false;
    }
   }
   

let input = document.getElementById('input73');
let btn = document.getElementById('btn-submit37');
let divRisposta = document.getElementById('risposta');

let parola = prompt('dammi una parola');
let risultato = checkPalindrome(parola);
console.log(risultato);
let min = 1;
let max = 5;
let num = parseInt(prompt('damme un numero'));
let numPc = getRndInteger(min, max);
let scelta = prompt('scegli pari o dispari');
if ((scelta === 'pari' && checkPlusEven(num,numPc))||(scelta === 'dispari' && !(checkPlusEven(num,numPc)))){
    console.log('hai vinto');
}
else{
    console.log('hai perso');
}
