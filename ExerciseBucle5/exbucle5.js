var numeroSecreto = suma;
var intentos = 0;
var señal = true;
while (señal==true) {
  var numeroAdivinado = parseInt(prompt("Intenta adivinar el número secreto:"));

  if (isNaN(numeroAdivinado)) {
    console.log("Por favor, ingresa un número válido.");
  } else {
    intentos++;
    if (numeroAdivinado === numeroSecreto) {
      console.log("¡Felicitaciones! Has adivinado el número secreto (" + numeroSecreto + ") en " + intentos + " intentos.");
      señal=false;
    } else if (numeroAdivinado < numeroSecreto) {
      console.log("El número secreto es mayor. Sigue intentando.");
    } else {
      console.log("El número secreto es menor. Sigue intentando.");
    }
  }
}
