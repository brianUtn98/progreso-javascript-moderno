const carrito4 = [];

const producto9 = {
  nombre: "Monitor 32 pulgadas",
  precio: 400,
};

const producto10 = {
  nombre: "Celular",
  precio: 800,
};

const producto11 = {
  nombre: "Teclado mecanico",
  precio: 250,
};

//Destructuring de arreglos

const unosNumeros = [10, 20, 30, 40];

const [, , tercero] = unosNumeros;

console.log(tercero);

const [primero, segundo, ...cola] = unosNumeros;

console.table(cola);
