function calcularPrecio(precio, cantidad) {
    var precioTotal = precio * cantidad;
  
    if (cantidad >= 20) {
      precioTotal *= 0.8;
    } else if (cantidad >= 10) {
      precioTotal *= 0.9;
    }
  
    return precioTotal;
  }
  
  var precioProducto = parseFloat(prompt("Ingresa el precio del producto:"));
  var cantidadProducto = parseInt(prompt("Ingresa la cantidad de productos:"));
  
  var total = calcularPrecio(precioProducto, cantidadProducto);
  
  console.log("Total a pagar: $" + total);
  