localStorage.clear();

const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 300,
};

const productoString = JSON.stringify(producto);
console.log(productoString);

localStorage.setItem("producto", productoString);

console.log(JSON.parse(productoString));