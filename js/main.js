/* RICHIESTA
-L’utente clicca su un bottone che genererà una griglia di gioco quadrata
-Ogni cella ha un numero progressivo, da 1 a 100
-Ci saranno quindi 10 caselle per ognuna delle 10 righe
-Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro
-Emetto un messaggio in console con il numero della cella cliccata

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra 3 diverse difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/




/* RICHIESTA 2
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà: - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe; - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe; - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle;
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste. */




// Collego COSTANTE a pulsante PLAY e lego ad esso FUNZIONE "creaGriglia" da eseguire al CLICK
const pulsantePlay = document.getElementById("pulsantePlay");
pulsantePlay.addEventListener("click", creaGriglia);

// Collego COSTANTE a elemento "containerGriglia" preso dall'HTML
const containerGriglia = document.getElementById("containerGriglia");

// Collego COSTANTE a elemento "layer" preso dall'HTML
const layer = document.querySelector(".layer");



// FUNZIONI
// Funzione legata a pulsante PLAY
function creaGriglia() {

    // Rimuovo classe active al layer
    layer.classList.remove("active");
    
    // Pulisco container (reset)
    containerGriglia.innerHTML = "";
    
    // Creo elemento DIV
    const elementoDiv = document.createElement("div");

    // Assegno a elemento DIV la classe GRIGLIA
    elementoDiv.classList.add("griglia");

    // Leggo e segno in una costante "difficolta" il VALORE della DIFFICOLTA'
    const difficolta = document.getElementById("easyMediumHard").value;

    if (difficolta === "easy") {                                            // SE difficoltà è EASY
        const elementoDiv = creaElementiGriglia("100", "cellaEasy");        // Creo contatore per 100 celle
        numeroMassimoGenerato = "100";                                      // Setto numero massino casuale generato a 100

    } else if (difficolta === "medium") {                                   // SE difficoltà è MEDIUM
        const elementoDiv = creaElementiGriglia("81", "cellaMedium");       // Creo contatore per 81 celle
        numeroMassimoGenerato = "81";                                       // Setto numero massino casuale generato a 81
    }
     else {                                                                 // ALTRIMENTI (se difficoltà è HARD)
        const elementoDiv = creaElementiGriglia("49", "cellaHard");         // Creo contatore per 49 celle
        numeroMassimoGenerato = "49";                                       // Setto numero massino casuale generato a 49
    }

    // Appendo elemento DIV con classe GRIGLIA contenente tutto, al CONTAINER GRIGLIA
    containerGriglia.append(elementoDiv);

    // Creo costante che genera attraverso una FUNZIONE, 16 numeri casuali
    const numeriCasuali = creoNumeriCasuali(16);
    console.log(numeriCasuali);

    // Creo elemeni griglia
    function creaElementiGriglia(numeroElementi, classe) {

        // Creo contatore
        for (let i = 1; i <= numeroElementi; i++) {
            // Creo elemento DIV
            const elementoCella = document.createElement("div");

            // Agiiungo classe CELLA e classe che varia in base a DIFFICOLTA' selezionata
            elementoCella.classList.add("cella", classe);

            // Aggiungo NUMERO in cella
            elementoCella.innerHTML = i;

            punti = 0;
        
            // Collego EVENTO al click della CELLA
            elementoCella.addEventListener("click", eventoAlClickCella);
            function eventoAlClickCella() {
                elementoCella.classList.add("cambioColore");
                console.log(i);

                if (numeriCasuali.includes(i)) {
                    console.log("GAME OVER. HAI BECCATO LA BOMBA! Punteggio: " + punti);
                    elementoCella.classList.add("cambioColoreBomba");
                    alert("GAME OVER. HAI BECCATO LA BOMBA!");
                    alert("Il tuo punteggio è: " + punti);
                    layer.classList.add("active");
                } else if (!numeriCasuali.includes(i)) {
                    punti++;
                    console.log("punti: " + punti);
                }
            }
        
            // Appendo la cella al DIV griglia principale
            elementoDiv.append(elementoCella);
        }
    }

    // Creo numeri casuali
    function creoNumeriCasuali(max) {
        // Creo ARRAY VUOTO
        const containerNumeriCasuali = [];

        // Creo ciclo che dovrà terminare al riempimento dell'arrey
        while (containerNumeriCasuali.length < max) {
            // Creo numero casuale
            const numero = numeroCasuale();

            // SE numero creato NON è già presente in ARRAY, pusha
            if (!containerNumeriCasuali.includes(numero)) {
                containerNumeriCasuali.push(numero);
            }
        }

        // Ritorno l'arrey ORA pieno
        return containerNumeriCasuali;
    }

    // Creo numero casuale in base al livello di difficoltà
    function numeroCasuale() {
        return Math.floor(Math.random() * numeroMassimoGenerato) + 1;       //numeroMassimoGenerato CAMBIA a seconda DIFFICOLTA'
    }
}