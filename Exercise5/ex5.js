function esMayorDeEdad(edad) {
    var mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    return mensaje;
  }
  

  var edadUsuario = parseInt(prompt("Ingresa tu edad:"));
  

  var resultado = esMayorDeEdad(edadUsuario);
  console.log(resultado);
  