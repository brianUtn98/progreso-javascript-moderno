localStorage.clear();

localStorage.setItem("nombre", "Brian Monroy");
localStorage.removeItem("nombre");

const meses = ["Enero", "Febrero", "Marzo"];

localStorage.setItem("meses", JSON.stringify(meses));

const mesesArray = JSON.parse(localStorage.getItem("meses"));

mesesArray.push("Abril");

localStorage.setItem("meses", JSON.stringify(mesesArray));