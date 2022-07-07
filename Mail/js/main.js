let numero1 = Math.floor((Math.random() * 6) +1);
let numero2 = Math.floor((Math.random() * 6) +1);

const GiocatoreUno = ('Giocatore 1 ha realizzato un punteggio di' + '' + numero1);
const GiocatoreDue = ('Giocatore 2 ha realizzato un punteggio di' + '' + numero2);

if (numero1 < numero2) {

    alert('Giocatore 1 Vince!');
}

else if (numero2 < numero1) {

    alert('Giocatore 2 Vince!');

}

console.log(numero1, numero2);