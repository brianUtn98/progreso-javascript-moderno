const enlace = document.createElement("a");

enlace.href = "#";
enlace.textContent = "Nuevo enlace";
console.log(enlace);
enlace.target = "_blank";

const navegacion = document.querySelector(".navegacion");

//agregar al final
navegacion.appendChild(enlace);

const otroEnlace = document.createElement("a");

otroEnlace.href = "#";
otroEnlace.textContent = "Otro nuevo Enlace";
//console.log(otroEnlace);
otroEnlace.target = "_blank";

otroEnlace.setAttribute("data-enlace", "nuevo-enlace");

otroEnlace.classList.add("alguna-clase");

navegacion.insertBefore(otroEnlace, navegacion.children[3]);

//PRACTICA - Crear un card!
const parrafo1 = document.createElement("p");
const parrafo2 = document.createElement("p");
const parrafo3 = document.createElement("p");

parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

parrafo2.textContent = "Concierto de rock";
parrafo2.classList.add("titulo");

parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

//Crear div con clase de info

const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen

const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

const card = document.createElement("div");
card.classList.add("card");

//Asigmanos el div

card.appendChild(imagen);
card.appendChild(info);

//Insertar este nuevo card

const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card);
