import "./App.css";
import Header from "./componentes/Header";
import React, { Fragment } from "react";
import Formulario from "./componentes/Formulario";
import Mensaje from "./componentes/Mensaje";
import Resultado from "./componentes/Resultado";
import Spinner from "./componentes/Spinner";
import { useState } from "react";
import "./helpers.js";

function App() {
  const [cantidad, guardarCantidad] = useState(0);
  const [cuotas, guardarCuotas] = useState("");
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let componente;
   if (cargando) {
     componente = <Spinner />;
   } else if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = (
      <Resultado total={total} cuotas={cuotas} cantidad={cantidad} />
    );
  }

  return (
    <Fragment>
      <Header titulo="Cotizador de prestamos" />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          cuotas={cuotas}
          guardarCuotas={guardarCuotas}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div>{componente}</div>
      </div>
    </Fragment>
  );
}

export default App;
