const habilitado = true;

console.log(habilitado ? "Esta habilitado" : "No esta habilitado");

const puedePagar2 = false;
console.log(
  habilitado
    ? puedePagar2
      ? "Esta habilitado y puede pagar"
      : "Esta habilitado pero no puede pagar"
    : "No esta habilitado"
);
