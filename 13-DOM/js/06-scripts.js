let encabezado = document.querySelector(".contenido-hero h1");

console.log(encabezado);
console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML); //se trae el html.

document.querySelector(".contenido-hero h1").textContent = "Nuevo Heading";

const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg";
console.log(imagen);
