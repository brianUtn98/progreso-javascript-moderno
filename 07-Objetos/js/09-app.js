"use strict"

const alumno6 = {
    nombre: "Brian",
    edad: 22,
    materiasAprobadas: 15
}

//Sella un objeto. No se pueden eliminar o agregar properties pero sí modificar existentes.
//Vuelve el objeto inextensible.
Object.seal(alumno6)