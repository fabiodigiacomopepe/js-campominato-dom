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



// Collego COSTANTE a pulsante PLAY e lego ad esso FUNZIONE "creaGriglia" da eseguire al CLICK
const pulsantePlay = document.getElementById("pulsantePlay");
pulsantePlay.addEventListener("click", creaGriglia);

// Collego COSTANTE a elemento "containerGriglia" preso dall'HTML
const containerGriglia = document.getElementById("containerGriglia");



// FUNZIONI
// Funzione legata a pulsante PLAY
function creaGriglia() {

    // Pulisco container (reset)
    containerGriglia.innerHTML = "";
    
    // Creo elemento DIV
    const elementoDiv = document.createElement("div");

    // Assegno a elemento DIV la classe GRIGLIA
    elementoDiv.classList.add("griglia");

    // Leggo e segno in una costante "difficolta" il VALORE della DIFFICOLTA'
    const difficolta = document.getElementById("easyMediumHard").value;

    if (difficolta === "easy") {                // SE difficoltà è EASY
        // Creo contatore per 100 celle
        const elementoDiv = creaElementiGriglia("100", "cellaEasy");
    } else if (difficolta === "medium") {        // SE difficoltà è MEDIUM
        // Creo contatore per 81 celle
        const elementoDiv = creaElementiGriglia("81", "cellaMedium");
    } else {                                     // ALTRIMENTI (se difficoltà è HARD)
        // Creo contatore per 49 celle
        const elementoDiv = creaElementiGriglia("49", "cellaHard");
    }

    // Appendo elemento DIV con classe GRIGLIA contenente tutto al CONTAINER GRIGLIA
    containerGriglia.append(elementoDiv);

    function creaElementiGriglia(numeroElementi, classe) {
        for (let i = 1; i <= numeroElementi; i++) {
            const elementoCella = document.createElement("div");
            elementoCella.classList.add("cella", classe);
            elementoCella.innerHTML = i;
        
            elementoCella.addEventListener("click", eventoAlClickCella);
            function eventoAlClickCella() {
                elementoCella.classList.add("cambioColore");
                console.log(i);
            }
        
            elementoDiv.append(elementoCella);
        }
    }
}