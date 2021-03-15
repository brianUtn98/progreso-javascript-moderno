const unCarrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifono", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

for (let i = 0; i < unCarrito.length; i++) {
  console.log(`${unCarrito[i].nombre} - Precio: ${unCarrito[i].precio}`);
}

unCarrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

//Otra forma:

unCarrito.forEach((producto) =>
  console.log(`${producto.nombre} - Precio: ${producto.precio}`)
);
