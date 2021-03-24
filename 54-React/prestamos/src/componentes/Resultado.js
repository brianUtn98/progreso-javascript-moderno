import React from 'react';

const Resultado = ({total,cuotas,cantidad}) => {
    return ( 
        <div className="u-full-width resultado">
        <h2>
            Resumen
        </h2>
        <p>
            Cantidad solicitada: ${cantidad}
        </p>
        <p>
            Cantidad mensual: {cuotas} cuotas de ${(total/cuotas).toFixed(2)}
        </p>
        <p>
            Total a pagar: ${(total).toFixed(2)}
        </p>
        </div>
   
      
   
     );
}
 
export default Resultado;