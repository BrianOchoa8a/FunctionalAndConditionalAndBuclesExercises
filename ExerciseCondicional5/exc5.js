
const persona1 = {
    nombre: prompt("Ingresa el nombre de la primera persona:"),
    edad: parseInt(prompt("Ingresa la edad de la primera persona:")),
    altura: parseFloat(prompt("Ingresa la altura de la primera persona en metros:"))
};


const persona2 = {
    nombre: prompt("Ingresa el nombre de la segunda persona:"),
    edad: parseInt(prompt("Ingresa la edad de la segunda persona:")),
    altura: parseFloat(prompt("Ingresa la altura de la segunda persona en metros:"))
};


if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es la persona más alta.");
} else if (persona1.altura < persona2.altura) {
    console.log(persona2.nombre + " es la persona más alta.");
} else {
    console.log("Ambas personas tienen la misma altura.");
}

if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es la persona de mayor edad.");
} else if (persona1.edad < persona2.edad) {
    console.log(persona2.nombre + " es la persona de mayor edad.");
} else {
    console.log("Ambas personas tienen la misma edad.");
}
