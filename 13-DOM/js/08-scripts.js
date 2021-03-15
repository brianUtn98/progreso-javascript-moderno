//Traversing de padre a hijo

const navegacion = document.querySelector(".navegacion");
console.log(navegacion);
console.log(navegacion.children); //nodos

for (i = 0; i < navegacion.children.length; i++) {
  console.log(`[${i}]:${navegacion.children[i].nodeType}`);
}

const card = document.querySelector(".card");

card.children[1].children[1].textContent =
  "Nuevo heading desde traversing the dom";

card.children[0].src = "img/hacer3.jpg";

//Traversing de hijo al padre.

console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);

//Siguiente elemento (hermano)

console.log(card.nextElementSibling);

const ultimoCard = document.querySelector(".card:nth-child(4)");

console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
