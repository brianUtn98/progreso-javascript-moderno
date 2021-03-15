function sumarValores(a, b) {
  return a + b;
}

const suma = sumarValores(3, 2);

console.log(suma);

let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(300);
total = agregarCarrito(500);

const totalPagar = calcularImpuesto(total);

console.log(totalPagar);
