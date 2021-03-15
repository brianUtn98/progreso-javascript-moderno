const busqueda = document.querySelector(".busqueda");

busqueda.addEventListener("keydown", () => {
  console.log("Escribiendo...");
});

busqueda.addEventListener("keyup", () => {
  console.log("Soltaste tecla");
});

busqueda.addEventListener("blur", () => {
  console.log("Activaste el blur");
});

busqueda.addEventListener("copy", () => {
  alert("Copiado al portapapeles");
}); //existe el cut que es análogo pero para cortar

busqueda.addEventListener("paste", () => {
  console.log("Pegado desde el portapapeles");
});

busqueda.addEventListener("input", (event) => {
  console.log(event.target.value);
});

//validacion facil para que un input no este vacio:

busqueda.addEventListener("input", (event) => {
  if (event.target.value == "") {
    console.log("Esta vacio");
  }
});
