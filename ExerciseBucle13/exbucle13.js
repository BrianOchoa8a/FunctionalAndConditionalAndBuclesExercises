var numeros = [];

for (var i = 0; i < 10; i++) {
  var numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  numeros.push(numero);
}

var numeroMasGrande = numeros[0];

for (var i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeroMasGrande) {
    numeroMasGrande = numeros[i];
  }
}

console.log("El número más grande en el array es: " + numeroMasGrande);
