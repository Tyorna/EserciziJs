/* analisi di progetto, stabilire cosa deve fare*/
/*Ricevere atraverso un form il nome e l'anno di nascita di una persona, verificare se una persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età */

/*Si cerca di capire come far fare a js per fare tutti gli eventi quindi lo spezzettamento dei compiti è molto importante */

/*
Compiti:
1.Leggere il campo nome e memorizzarlo;
2.Leggere il campo anno e memorizzarlo;
3.Con il valore memorizzato dal campo anno, calcolare l'età in base all'anno in corso; questo unico punto in teratà sono tre, prende l'anno in cui siamo, l'hanno scritto e bisogna dirgli che calcolo deve fare;
4. Verificare la maggiore e minore eta; bisogna dirgli quando è magg e quando non lo e, confrontare questo paramentro con il risultato del punto tre e quindi fare in modo che determini se è meggiorenne o minorenne;
5.Scrivere nell'HTML;
6. Cancellare il form; una volta che è stato inviato prepara il form per eventuali invii successivi;
*/

/*Quando si progetta uno script bisogna portsi una macrodomanda, cosa js deve fare automaticamente e che cosa invece deve fare a seguito di uno o più eventi e quali sono questi eventi.*/

/*Scoprire quali sono gli eventi scatenanti delle altre azioni ed eseguirli.*/

/*In questo caso, js deve fare qualcosa a caricamento della pagina. No perchè deve aspettare gli input.
QUello che è un evento che tipicamente viene chiamato in testa ad ogni script java che è window.adventlistener('load', function-...)non viene usato in questo caso, viene messo solo se js dovrebbe fare qualcosa quando la pagina verrebbe caricata.
*/

/*Evento scatenante è il click sul button;
questo evento da origine a tutto il resto. Questo evento è anche il nostro eventhandler(gestore degli eventi che dovranno verificarsi)

Quali e quante variabili ci servono, quali sono globali e quali sono locali

VARIABILI:
Globali; btn(bottone)-costante
         eta(deve girare su più metodi)
        stato(maggiore età, in due metodi)
*/

const btn = document.getElementById('verifica');

var eta; //globable perchè valorizzata al calcolo dell0età e utilizzata nella verifica della maggiore eta
var stato;// globale perche viene valorizzata in fase di veridica e usata in stampa.

btn.addEventListener('click', function(){
    let nome = document.getElementById('nome');
    let anno = document.getElementById('anno');

    calcolaEta(anno.value);
    verifica();
    scrivi(nome.value);
    cancellaForm(nome, anno);
});

//Abbiamo definito i due campi
/*chiamo la funzione che mi calcola l'eta e una volta eseguita torna li: calcola eta viene usato prendendo il valore di eta e andandolo poi a mettere nella funzione. Funzione di callback.*/

function calcolaEta(anno){
    eta = 2023 - anno;
}

function verifica() {
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne';
}

/*
creo la funzione per verificare la maggiore età. Con il valore di eta sono andata a verificarlo e a mettere la condizione di maggiore o minore eta.
Punto e virgola no dopo le parentesi graffe.
*/

/*
Ora bisogna scrivere nell'html.
ha bisogno del nome.
*/

function scrivi(nome){
    document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
    document.getElementById('miaVerifica').innerHTML = 'La tua età e ' + eta + ' anni; sei ' + stato;
}

/*Ci resta da cancellare il form. Che dovrà ricevere in ingresso i campi nome ed eta e svuotarli
*/

function cancellaForm(nome, anno){
    nome.value ='';
    anno.value ='';
}