//Diferencia entre Function declaration - Function expression
restar();
function restar() {
  console.log(4 - 2);
}

//Esta falla, la de arriba no. Tiene que ver con hoisting.
restar2();
const restar2 = function () {
  console.log(5 - 3);
};
