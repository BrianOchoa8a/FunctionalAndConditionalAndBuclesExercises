
const numeroIncognita = Math.floor(Math.random() * 10) + 1;


let intentos = 3;


while (intentos > 0) {
    // Solicitar al usuario que ingrese un número
    const numeroIngresado = parseInt(prompt(`Intento ${4 - intentos}: Ingresa un número del 1 al 10:`));

    if (numeroIngresado === numeroIncognita) {
        console.log("¡Ganaste! Has adivinado el número.");
        break;
    } else if (numeroIngresado < numeroIncognita) {
        console.log("El número ingresado es menor. Vuelve a intentarlo.");
    } else {
        console.log("El número ingresado es mayor. Vuelve a intentarlo.");
    }

    intentos--;
}

if (intentos === 0) {
    console.log("Lo siento, has agotado tus intentos. El número era:", numeroIncognita);
}
