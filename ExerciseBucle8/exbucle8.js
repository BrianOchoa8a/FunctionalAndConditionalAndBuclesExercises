var numeros = [];
for (var i = 0; i < 5; i++) {
  var numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  numeros.push(numero);
}

console.log("El doble de cada número en el array:");

for (var numero of numeros) {
  var doble = numero * 2;
  console.log(`El doble de ${numero} es ${doble}`);
}
