const unCarrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifono", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

function cambiarPrecio(producto, multiplicador) {
  producto.precio = producto.precio * multiplicador;
}

//Aumentar un 10% los pares y un 15% los impares
unCarrito.forEach((producto, index) => {
  if (index % 2 == 0) {
    cambiarPrecio(producto, 1.1);
  } else {
    cambiarPrecio(producto, 1.15);
  }
});

unCarrito.forEach((producto) => console.log(producto));

const nombres = unCarrito.map((producto) => producto.nombre);

console.log(nombres);
