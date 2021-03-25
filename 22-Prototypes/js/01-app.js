const cliente = {
    nombre: 'Juan',
    saldo: 1500
}

function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente("Juan",3000)

console.log(cliente)
console.log(juan)