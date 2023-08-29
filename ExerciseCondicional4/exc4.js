
const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
const numero3 = parseFloat(prompt("Ingresa el tercer número:"));


if (numero1 <= numero2 && numero1 <= numero3) {
    console.log("El primer número es el más chico.");
} else if (numero2 <= numero1 && numero2 <= numero3) {
    console.log("El segundo número es el más chico.");
} else if (numero3 <= numero1 && numero3 <= numero2) {
    console.log("El tercer número es el más chico.");
}
