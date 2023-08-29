
const nombreCliente = prompt("Ingresa tu nombre:");
const pase = prompt("Ingresa tu tipo de pase (vip o normal):");
const tieneEntrada = prompt("¿Posees entrada? (si o no):").toLowerCase();


if (nombreCliente === "Brian" || pase === "vip") {
    console.log("¡Bienvenido! Disfruta del evento.");
} else if (tieneEntrada === "si") {
    const usarEntrada = prompt("¿Deseas utilizar tu entrada? (si o no):").toLowerCase();
    if (usarEntrada === "si") {
        console.log("¡Bienvenido! Disfruta del evento.");
    } else {
        const comprar = prompt("¿Deseas comprar entrada? (si o no):").toLowerCase();
        if (comprar === "si") {
            const dineroDisponible = parseFloat(prompt("Ingresa la cantidad de dinero disponible:"));
            if (dineroDisponible >= 1000) {
                console.log("Venta exitosa. ¡Bienvenido! Disfruta del evento.");
            } else {
                console.log("Venta rechazada. No tienes suficiente dinero.");
            }
        } else {
            console.log("Gracias por tu visita. ¡Hasta luego!");
        }
    }
} else {
    const comprar = prompt("¿Deseas comprar entrada? (si o no):").toLowerCase();
    if (comprar === "si") {
        const dineroDisponible = parseFloat(prompt("Ingresa la cantidad de dinero disponible:"));
        if (dineroDisponible >= 1000) {
            console.log("Venta exitosa. ¡Bienvenido! Disfruta del evento.");
        } else {
            console.log("Venta rechazada. No tienes suficiente dinero.");
        }
    } else {
        console.log("Gracias por tu visita. ¡Hasta luego!");
    }
}
