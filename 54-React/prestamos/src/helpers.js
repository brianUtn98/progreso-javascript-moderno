export function calcularTotal(cantidad, cuotas) {
  //Cantidades
  //0 - 1000 = 25%
  //1001 - 5000 = 20%
  //5001 - 10000 = 15%
  //+10000 = 10%

  const interesCantidad =
    cantidad < 1001
      ? cantidad * 0.25
      : cantidad < 5001
      ? cantidad * 0.2
      : cantidad < 10001
      ? cantidad * 0.15
      : cantidad * 0.1;

  //Calcular plazo
  //3 = 5%
  //6 = 10%
  //12 = 15%
  //24 = 20%
  const interesCuota =
    cuotas === 3
      ? cantidad * 0.05
      : cuotas === 6
      ? cantidad * 0.1
      : cuotas === 12
      ? cantidad * 0.15
      : cantidad * 0.2;

  //return cantidad + interesCantidad + interesCuota;
   return cantidad + interesCantidad + interesCuota;
}
