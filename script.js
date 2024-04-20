//ALGORITMO
//si la palabra es igual a intento entonces imprimir GANASTE
//si no si primer_intento es igual a primer_palabra entonces imprimir primer_intento verde
//sino si primer_intento existe palabra entonces imprimir primer_intento amarillo
//sino entonces imprimir primer_intento gris
//SI INTENTOS ES IGUAL A CERO ENTONCES IMPRIMIR GRIS







let intentos = 6;
let lista = ["APPLE", "GLOBE", "HELLO", "STORE", "SUNNY","BRAIN", "AFTER"]
// console.log("elementos",lista.length);
let posicion = Math.floor(Math.random() * lista.length)
let palabra = lista[posicion];
console.log(palabra);
const BUTTON = document.getElementById("guess-button");
console.log(BUTTON);
BUTTON.addEventListener("click", intentar);

function intentar() {
    const intento_user = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";
    console.log('div', ROW);

    // if (palabra === intento_user) {
    //     terminar("<h1>GANASTE!😀</h1>")
    //     return terminar;
    // } else {
    intentos = intentos - 1; //intentos --1
    console.log("te quedan", intentos, "intentos");
    for (pos in palabra) {
        // console.log(palabra[pos],); //imprime posicion del elemento
        const SPAN = document.createElement("span");
        SPAN.className = "letter"
        SPAN.innerHTML = intento_user[pos];
        if (intento_user[pos] === palabra[pos]) {
            console.log(intento_user[pos], "verde"); //imprime verde si las letras son corectas y estan la posicion correcta
            SPAN.style.backgroundColor = '#79b851';
        } else if (palabra.includes(intento_user[pos])) {
            console.log(intento_user[pos], "amarillo"); //Imprime amarillo si las letras son correctas pero no estan en la posicion correcta
            SPAN.style.backgroundColor = '#f3c237';
        } else {
            console.log(intento_user[pos], "gris"); //imprime gris si las letras son incorrectas y la posicion es incorrecta
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN);

    }
    GRID.appendChild(ROW);
    if (palabra === intento_user) {
        terminar("<h1>GANASTE!😀</h1>");
    } 
    if (intentos === 0) {
        terminar("<h1>PERDISTE!😖</h1>");
    }
}

function leerIntento() {
    let intento_user = document.getElementById("guess-input").value;
    intento_user = intento_user.toUpperCase();
    return intento_user;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}
// intentar(leerIntento);




// intentar(document.getElementById("guess-input"))
// // intentar ("HELLO")
// // intentar ("GLOBE")

// //DOM (Document Object Model)
// console.log("input del dom",document.getElementById("guess-input".value))