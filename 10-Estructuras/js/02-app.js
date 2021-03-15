const numero = 1000;
const numero2 = "1000";

if (numero == numero2) {
  console.log(`${numero} y ${numero2} son iguales`);
} else {
  console.log(`${numero} y ${numero2} no son iguales`);
}

if (numero === numero2) {
  console.log(`${numero} y ${numero2} son estrictamente iguales`);
} else {
  console.log(`${numero} y ${numero2} no son estrictamente iguales`);
}
