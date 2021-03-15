//Eventos con el mouse

const nav = document.querySelector(".navegacion");

//registrar un evento

nav.addEventListener("click", () => {
  console.log("Click en nav!");
});

nav.addEventListener("mouseenter", () => {
  console.log("Entrando al nav");
  nav.style.backgroundColor = "lightblue";
});

nav.addEventListener("mouseout", () => {
  console.log("Saliendo del nav");
  nav.style.backgroundColor = "transparent";
});

nav.addEventListener("mousedown", () => {
  console.log("Mouse down");
  nav.style.backgroundColor = "red";
});

nav.addEventListener("mouseup", () => {
  console.log("Mouse up");
});

nav.addEventListener("dblclick", () => {
  console.log("Diste doble click");
});
