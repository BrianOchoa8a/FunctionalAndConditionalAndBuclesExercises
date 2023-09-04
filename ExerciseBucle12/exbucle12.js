var sumaPares = 0;
var sumaImpares = 0;
var señal = true;
while (señal==true) {
  var numero = parseInt(prompt("Ingresa un número (ingresa 0 para terminar):"));

  if (numero === 0) {
    señal=false;
  }

  if (numero % 2 === 0) {
    sumaPares += numero;
  } else {
    sumaImpares += numero;
  }
}

console.log("Suma de números pares: " + sumaPares);
console.log("Suma de números impares: " + sumaImpares);
