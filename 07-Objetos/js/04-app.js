const alumno3 = {
    nombre: "Brian",
    edad: 22,
    materiasAprobadas: 15
}

//const nombre = alumno3.nombre

//console.log(nombre)

//Destructuring
const { nombre,edad,materiasAprobadas } = alumno3

console.log(`${nombre}, ${edad} años. Tiene ${materiasAprobadas} materias aprobadas`)