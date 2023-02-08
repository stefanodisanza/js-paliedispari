const sceltaUser = prompt('Scegli "pari" o "dispari":');
const numeroUser = parseInt(prompt('Scegli un numero da 1 a 5:'));
const numeroComputer = Math.floor(Math.random() * 5) + 1;
const sum = numeroUser + numeroComputer;
const isEven = sum % 2 === 0;
let result;
if (isEven && sceltaUser === 'pari' || !isEven && sceltaUser === 'dispari') {
  result = 'Hai vinto!';
} else {
  result = 'Hai perso.';
}
alert(`Il tuo numero è ${numeroUser}, il numero del computer è ${numeroComputer}. La somma è ${sum} che è ${isEven ? 'pari' : 'dispari'}. ${result}`);



