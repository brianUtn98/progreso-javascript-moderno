const metodoDePago = 'efectivo'

    switch(metodoDePago){
        case 'efectivo': 
        console.log("Elegiste pagar con dinero en efectivo");
        break;
        case 'tarjeta credito':
        console.log("Vas a pagar con tarjeta de credito");
        break;
        case 'tarjeta de debito':
        console.log("Vas a pagar con tarjeta de debito");
        break;
        default:
        console.log("Metodo de pago no soportado");
        break;
    }