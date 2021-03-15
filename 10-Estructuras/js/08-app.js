function revisarPuntaje(puntaje) {
  if (puntaje > 400) {
    console.log("Excelente!");
    return;
  }

  if (puntaje > 300) {
    console.log("Buen puntaje!");
    return;
  }

  if (puntaje > 200) {
    console.log("Aceptable");
    return;
  }

  if (puntaje > 100) {
    console.log("Podria ser mejor");
    return;
  }

  if (puntaje <= 100) {
    console.log("Mal puntaje");
    return;
  }
}

revisarPuntaje(1000);

//Otra forma es hacerlo con else if

const puntos = 1000;
if (puntos > 400) {
  console.log("Excelente");
} else if (puntos > 300) {
  console.log("Buen puntaje");
} else if (puntos > 200) {
  console.log("Aceptable");
} else if (puntos > 100) {
  console.log("Podria ser mejor");
} else {
  console.log("Mal puntaje");
}
