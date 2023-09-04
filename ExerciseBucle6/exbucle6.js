var numero = parseInt(prompt("Ingresa un número para encontrar sus divisores:"));

console.log("Divisores de " + numero + ":");

for (var i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    var cociente = numero / i;
    console.log(numero + " / " + i + " = " + cociente + " (resultado es " + cociente + " y sobra 0)");
  }
}
