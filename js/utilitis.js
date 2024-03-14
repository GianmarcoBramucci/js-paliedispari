// funzione che genera un numero random tra due numeri
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
  } 

  						 
  function getProgressiveDivId(nomeId,i,classe,html) {
	let idValue=`${nomeId}${i}`;
	let div= document.createElement('div');
	div.setAttribute('id', idValue);
	div.className = classe;
	div.innerHTML = html;
	return (div);
  } 


function getArraysSameLenghtRandomElement (lenght,numberArray,arrayName){
	let risultato =[];
	let max = 10;
	let min = 1;
	for(let i = 0; i<numberArray;i++){
		risultato.push(`${arrayName}-${i}`);
		for(let j=0; j<lenght;j++){
			risultato.push(getRndInteger(min, max));
		}
	}
	return risultato;
}  