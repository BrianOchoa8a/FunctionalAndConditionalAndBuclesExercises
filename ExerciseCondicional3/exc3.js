
const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));


if (numero1 > numero2) {
    console.log("El primer número es más grande que el segundo.");
} else if (numero1 < numero2) {
    console.log("El segundo número es más grande que el primero.");
} else {
    console.log("Los números son iguales.");
}
