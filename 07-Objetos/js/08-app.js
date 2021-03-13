//exige el cumplimiento de ciertas reglas.
"use strict"

const alumno5 = {
    nombre: "Brian",
    edad: 22,
    materiasAprobadas: 15
}

alumno5.edad = 23

console.log(alumno5.edad)

//Vuelve al objeto inmutable.
Object.freeze(alumno5)

console.log(Object.isFrozen(alumno5))