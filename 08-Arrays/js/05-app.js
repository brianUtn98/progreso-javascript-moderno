const numeros5 = [1,2,3]

numeros5.push(4);

const carrito = [];

const producto1 = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
};

carrito.push(producto1);

const producto2 = {
    nombre: "Celular",
    precio: 800
}

carrito.unshift(producto2)

console.table(carrito)