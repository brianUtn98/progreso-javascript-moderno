const alumno8 = {
  nombre: "Brian",
  edad: 22,
  materiasAprobadas: 15,
  mostrarInfo: function () {
    console.log(
      `El alumno ${this.nombre}, 22 ${this.edad} tiene ${this.materiasAprobadas} materias aprobadas`
    );
  },
};

alumno8.mostrarInfo();
