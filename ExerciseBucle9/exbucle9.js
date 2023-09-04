
var familia = [
  {
    nombre: "Juan",
    edad: 35,
    relacion: "Papa",
    ciudad: "Devoto"
  },
  {
    nombre: "Ana",
    edad: 32,
    relacion: "Mama",
    ciudad: "San Francisco"
  },
  {
    nombre: "Pedro",
    edad: 10,
    relacion: "Hijo",
    ciudad: "Cordoba"
  },
  {
    nombre: "Laura",
    edad: 7,
    relacion: "Hija",
    ciudad: "Cordoba"
  }
];

for (var miembro of familia) {
  console.log(`Hola, soy ${miembro.nombre}, tengo ${miembro.edad} años, soy ${miembro.relacion} y vivo en ${miembro.ciudad}.`);
}
