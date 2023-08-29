
const nombre = prompt("Ingresa tu nombre:");
const edad = parseInt(prompt("Ingresa tu edad:"));
const altura = parseFloat(prompt("Ingresa tu altura en cm:"));
const vision = parseFloat(prompt("Ingresa tu visión (de 0 a 10):"));


if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log(nombre + ", estás capacitado para conducir.");
} else {
    console.log(nombre + ", no estás capacitado para conducir.");
}
