function calcularImpuesto(ingresoAnual) {
    if (ingresoAnual <= 10000) {
        return ingresoAnual * 0.1;
    } else if (ingresoAnual <= 20000) {
        return ingresoAnual * 0.15;
    } else {
        return ingresoAnual * 0.2;
    }
}

const ingresoAnual = parseFloat(prompt("Ingresa tu ingreso anual:"));

const impuesto = calcularImpuesto(ingresoAnual);
console.log("El impuesto a pagar es:", impuesto);
