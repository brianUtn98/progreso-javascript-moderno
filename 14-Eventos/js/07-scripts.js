//Event bubbling

const cardDiv = document.querySelector(".card");

cardDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("titulo")) {
    console.log("Diste click en titulo");
  }
  if (event.target.classList.contains("precio")) {
    console.log("Diste click en precio");
  }
  if (event.target.classList.contains("card")) {
    console.log("Diste click en card");
  }
});
