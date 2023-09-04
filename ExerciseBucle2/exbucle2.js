
var numero = parseInt(prompt("Por favor, ingresa un número entre 1 y 10:"));

if (numero >= 1 && numero <= 10) {
  console.log("Tabla de multiplicar del " + numero + ":");
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
} else {
  console.log("Número incalido. Debes ingresar un número entre 1 y 10.");
}