const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
  console.log("Puede comprar");
} else if (!usuario) {
  console.log("Primero debes loguearte");
} else if (!puedePagar) {
  console.log("No tienes dinero en cuenta!");
} else {
  console.log("Registrate y deposita dinero para comprar");
}
