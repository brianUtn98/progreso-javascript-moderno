//Object literal
const alumno9 = {
  nombre: "Brian",
  edad: 22,
  materiasAprobadas: 15,
};

//Object constructor

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.tieneStock = true;
}

const producto2 = new Producto("Tablet", 3000);

console.log(producto2);
