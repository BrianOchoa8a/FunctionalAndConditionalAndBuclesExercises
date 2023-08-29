
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
  }
  
  var base = parseFloat(prompt("Ingresa la base del triángulo:"));
  var altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
  
  var area = areaTriangulo(base, altura);
  
  console.log("Área del triángulo: " + area);
  
  var lado1 = 4;
  var lado2 = 5;
  var lado3 = 6;
  
  var perimetro = perimetroTriangulo(lado1, lado2, lado3);
  
  console.log("Perímetro del triángulo: " + perimetro);
  