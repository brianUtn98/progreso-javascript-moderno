const carrito3 = [];

const producto6 = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
};

const producto7 = {
    nombre: "Celular",
    precio: 800
}

const producto8 = {
    nombre: "Teclado mecanico",
    precio: 250
}

carrito3.push(producto6)
carrito3.push(producto7)
carrito3.push(producto8)

console.table(carrito3)

//Elimina ultimo elemento del arreglo.
carrito3.pop();

console.table(carrito3)

//Elimina el primer elemento del arreglo.
carrito3.shift();

console.table(carrito3)

carrito3.push(producto6)
carrito3.push(producto7)
carrito3.push(producto8)

//Elimina elementos. splice(inicio,cantidadBorrar);
carrito3.splice(1,1);

console.table(carrito3)