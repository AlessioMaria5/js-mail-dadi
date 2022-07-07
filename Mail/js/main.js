
let subscribers = ['alessio.vietri@boolean.it', 'jacopo.damiani@boolean.it', 'simone.giusti@boolean.it', 'adriano.grimaldi@boolean.it']
const userEmail = prompt('Inserisci la tua Email');
let recorder = false;

for ( let i =0; i < subscribers.length; i++ ) {

    if (userEmail == subscribers[i]) {
        recorder = true;
    }
}

if (recorder == true){
    alert('Puoi entrare');
}

else if (recorder == false) {
    alert('non puoi entrare');
}