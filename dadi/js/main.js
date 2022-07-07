let numero1 = Math.floor((Math.random() * 50) +1);
let numero2 = Math.floor((Math.random() * 50) +1);
const Start = document.getElementById('Start');

let giocatore1 = document.getElementById('Giocatore1')
let giocatore2 = document.getElementById('Giocatore2')

let black = document.createElement('div');
giocatore1.append(black);

let white = document.createElement('div');
giocatore2.append(white);

black.setAttribute('id','playerone');
white.setAttribute('id','playertwo')


// EVENT CLICK START

Start.addEventListener ('click',
function(){

    let numero1 = Math.floor((Math.random() * 6) +1);
    let numero2 = Math.floor((Math.random() * 6) +1);

    let finalKarma = document.getElementById('finalKarma');
    finalKarma.setAttribute('class', 'fn-karma');

    if (numero1 < numero2) {
        finalKarma.innerHTML = '<p class="yourKarma">il tuo Karma (カルマ) è:</p> <p class="finalRes">NEGATIVO<span> わるい!! </span></p>';
    }
    
    else if (numero2 < numero1) {
        finalKarma.innerHTML = '<p class="yourKarma">il tuo Karma (カルマ) è:</p> <p class="finalRes">POSITIVO<span> よい!! </span></p>';
    }
    
    else if (numero1 == numero2) {
        finalKarma.innerHTML = '<p class="yourKarma">il tuo Karma (カルマ) è:</p> <p class="finalRes">ZEN<span> ぜん!! </span></p>';
    }


    black.setAttribute('class','white-animation');
    white.setAttribute('class','black-animation');

    giocatore1.style.display = "block";
    giocatore2.style.display = 'block';

}

);
