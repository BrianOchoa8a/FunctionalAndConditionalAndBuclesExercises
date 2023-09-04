
var suma = 0;
var señal= true;
while (señal===true) {
  var numero = parseInt(prompt("Ingresa un número (ingresa 0 para terminar):"));
  if (numero === 0) {
    señal=false;
  }
  suma += numero;
}

console.log("La suma de los números ingresados es: " + suma);
