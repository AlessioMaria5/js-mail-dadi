
let subscribers = ['alessio.vietri@boolean.it', 'jacopo.damiani@boolean.it', 'simone.giusti@boolean.it', 'adriano.grimaldi@boolean.it']
const userEmail = prompt('Inserisci la tua Email');

for ( let i =0; i < subscribers.length; i++ ) {

    if (userEmail == subscribers[i]) {

        alert('Benvenuto!');
    }
    
}

let NewUser = userEmail == subscribers;

if (NewUser = false) {

    alert('ciao');
}

console.log(NewUser);