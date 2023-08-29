function verificarDia(numeroDia) {
    switch (numeroDia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Es un día laboral";
        case 6:
        case 7:
            return "Es fin de semana";
        default:
            return "Número de día inválido";
    }
}


const numeroDia = parseInt(prompt("Ingresa el número del día de la semana (1 al 7):"));

const resultado = verificarDia(numeroDia);
console.log(resultado);
