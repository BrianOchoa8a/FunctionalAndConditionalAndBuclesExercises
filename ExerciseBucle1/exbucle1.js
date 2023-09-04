
var numero = parseInt(prompt("Por favor, ingresa un número entre 1 y 100:"));


if (numero >= 1 && numero <= 100) {

  for (var i = numero; i >= 0; i--) {
    console.log(i);
  }
} else {
  console.log("Número invalido. Debes ingresar un número entre 1 y 100.");
}
100