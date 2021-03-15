const alumno7 = {
  nombre: "Brian",
  edad: 22,
  materiasAprobadas: 15,
};

const unasMedidas = {
  peso: "75kg",
  altura: "171cm",
};

console.log(alumno7);
console.log(unasMedidas);

const resultado = Object.assign(alumno7, unasMedidas);

//Spread o rest operator.

const resultado2 = { ...alumno7, ...unasMedidas };

console.log(resultado);
console.log(resultado2);
