//Event bubbling

const cardDiv = document.querySelector(".card");
const cardInfo = document.querySelector(".info");
const cardTitulo = document.querySelector(".titulo");

cardDiv.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Click en card");
});

cardInfo.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Click en info");
});

cardTitulo.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Click en titulo");
});
