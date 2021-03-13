const carrito2 = [];

const producto3 = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
};

const producto4 = {
    nombre: "Celular",
    precio: 800
}

const producto5 = {
    nombre: "Teclado mecanico",
    precio: 250
}

//forma declarativa de agregar elementos a un array

let resultado = [...carrito2, producto3];
resultado = [...resultado,producto4];
resultado = [producto5,...resultado];
console.table(resultado)
//El carrito no mutó. Esto tiene que ver con funcional - inmutabilidad.