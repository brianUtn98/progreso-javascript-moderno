const reproductor2 = {
  cancion: "",
  reproducir: (cancion) => console.log(`Reproduciendo cancion ${cancion}`),
  pausar: () => console.log(`Pausando`),
  crearPlaylist: (nombre) => console.log(`Creando playlist ${nombre}`),
  reproducirPlaylist: (nombre) =>
    console.log(`Reproduciendo playlist ${nombre}`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor2.reproducir("Welcome to the jungle");
reproductor2.pausar();

reproductor2.borrar = function () {
  console.log("Borrando cancion");
};

reproductor2.borrar();

reproductor2.crearPlaylist("Punk rock");

reproductor2.reproducirPlaylist("Punk rock");

reproductor2.nuevaCancion = "Enter sandman";
reproductor2.obtenerCancion;
