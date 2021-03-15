const dineroEfectivo = 300;
const dineroCredito = 1000;
const disponible = dineroCredito + dineroEfectivo;
const costoTotal = 600;

if (dineroEfectivo > totalPagar || dineroCredito > totalPagar) {
  console.log("Se puede comprar");
} else if (disponible > totalPagar) {
  console.log("Se puede comprar");
} else {
  console.log("No se puede comprar");
}
