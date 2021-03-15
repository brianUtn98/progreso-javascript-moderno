const unCarrito2 = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifono", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

const carritoConDescuento = unCarrito2.map(function (producto) {
  let descuento = producto.precio * 0.1;
  let productoNuevo = producto;
  productoNuevo.precio -= descuento;
  return productoNuevo;
});

//Alternativa al map

const carritoConDescuento2 = unCarrito2.forEach(function (producto) {
  let descuento = producto.precio * 0.1;
  let productoNuevo = producto; //tiene que haber una forma de comprimir esto.
  productoNuevo.precio -= descuento;
  return productoNuevo;
});

console.log(carritoConDescuento);

carritoConDescuento.forEach((producto) =>
  console.log(`${producto.nombre} - Nuevo precio: ${producto.precio}`)
);
