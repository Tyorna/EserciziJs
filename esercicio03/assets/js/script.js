var btnCalcola = document.getElementById('calcola');
var btnReset = document.getElementById('reset');

//dovro intercettare l'operazione. Mi serve inercettarla in più punti? Controllo. Si mi serve in piu punti. 

var operazione;
var numero1;
var numero2;
var semaforo = true;

//il risultato mi serve globale? calcolato dal calcolo e poi scritto, mi serve globale.

var risultato;

//quando entro nella pagina js deve fare qualcosa? Qui si potrebbe usare una precauzione. E vuoto appena si carica la pagina (riferito all'ultimo h3), ma si può svuotare per precauzione=

window.addEventListener('load', init);

//intercetta il caricamento della finestra e quando si è caricata avvia una function che si chiama init in cui io gli faccio svuotare il testo.

function init() {
    document.getElementById('risultato').innerHTML = '';
    eventHandler();
}

//tipico script js.

function eventHandler() {
    leggi();//dovrà leggere il form
}



//gestore di eventi, fa il vigile e decide chi deve passare prima e se fermarsi. 

//Prima cosa che dev'essere fatta bisogna leggere.

function leggi() {
    btnCalcola.addEventListener('click', function () {
        operazione = document.getElementById('operazione').value;
        numero1 = document.getElementById('numero1').value;
        numero2 = document.getElementById('numero2').value;

        if (!controlla()) {
            return;//cioè se il controllo va male si ferma;
        }
        calcola(); //se va bene continua
        if (semaforo) {
            scrivi();
        cancellaForm();
        } else {
            return;
        }
    });
}

//deve leggere i numeri che abbiamo scritto. Ora deve partire il controllo.

function controlla() { //controlliamo se hai scritto i due numeri e l'operazione.
    if (operazione == '' || numero1 == '' || numero2 == '') {
        document.getElementById('risultato').innerHTML = 'Attenzione!Compilare correttamente tutti i campi e scegliere un\'operazione';
        return false;
    } else {
        return true;
    }
}

//ora si deve fare il calcolo

function calcola() {
    numero1 = Number(numero1); //per precauzione perchè anche se sono numeri ogni tanto arrivano come se fossero testo.
    numero2 = Number(numero2);
    //chi è che riceve?

    switch (operazione) {
        case 'add':
            risultato = numero1 + numero2;
            break;

        case 'sottr':
            risultato = numero1 - numero2;
            break;

        case 'molt':
            risultato = numero1 * numero2;
            break;

        case 'div':
            if (numero2 === 0) { //scoppia js se provi a farlo diviso 0.
                document.getElementById('risultato').innerHTML = 'Non è possibile effettuare una divisione per 0!';
                semaforo= false;
                return;
            } else {
                semaforo= true;
                risultato = numero1 / numero2;
            }
            break;
    }
}

//switch è più veloce perchè legge una volta sola il tipo di operazione quanto vale. Mentre if tornerebbe a leggere ogni volta. Abbiamo messo il value della option nel caso della select. 
//A questo punto deve scrivere.

function scrivi() {
    document.getElementById('risultato').innerHTML = //L'interpolazione di stringhe non si fa aprendo apici o doppi apici ma si fanno con ``. Usando questi non si deve chiudere la stringa ma passo le variabili con  alt 96 direttamente nella stringa.E le varie variabili le chiamo con il simbolo $ e il loro nome.
        `Il risultato della ${operazione} tra ${numero1} e ${numero2} è ${risultato}`
}

//ALtrimenti avrei scritto la solita stringa con i vari apici e i vari più.
//Per finire voglio cancellare il form.

function cancellaForm() {
    btnReset.addEventListener('click', function () {
        document.getElementById('risultato').innerHTML = '';
    });
}
