import React, { Fragment } from "react";
import { useState } from "react";
import { calcularTotal } from "../helpers";

const Formulario = (props) => {
  //definir estado

  const {
    cantidad,
    guardarCantidad,
    cuotas,
    guardarCuotas,
    guardarTotal,
    guardarCargando,
  } = props;
  const [error, guardarError] = useState(false);

  const leerCantidad = (event) => {
    guardarCantidad(parseInt(event.target.value));
  };

  const leerCuotas = (event) => {
    guardarCuotas(parseInt(event.target.value));
  };

  const calcularPrestamo = (event) => {
    event.preventDefault();

    //Validar formulario
    if (cuotas === "" || cantidad === 0) {
      guardarError(true);
    }

    guardarError(false);

    //Habilitar spinner
    guardarCargando(true);

    setTimeout(() => {
      const total = calcularTotal(cantidad, cuotas);
      guardarTotal(total);

      //Deshabilitar spinner

      guardarCargando(false);
    }, 3000);
  };

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={leerCantidad}
            />
          </div>
          <div>
            <label>Plazo para pagar</label>
            <select className="u-full-width" onChange={leerCuotas}>
              <option value="">Seleccionar</option>
              <option value="3">3 Meses</option>
              <option value="6">6 Meses</option>
              <option value="12">12 Meses</option>
              <option value="24">24 Meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      <div>
        {error ? (
          <p className="error">Todos los campos son obligatorios.</p>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default Formulario;
