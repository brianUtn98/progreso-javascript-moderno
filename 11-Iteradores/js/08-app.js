const unCarrito3 = [
    {nombre: "Monitor 27 pulgadas",precio: 500},
    {nombre: "Television",precio:100},
    {nombre: "Tablet",precio:200},
    {nombre:"Audifono",precio:300},
    {nombre:"Teclado",precio:400},
    {nombre:"Celular",precio:700}
]

const unProducto = unCarrito3[0]

for(let propiedad in unProducto){
    console.log(`${propiedad}: ${unProducto[propiedad]}`)
}

for( let [llave,valor] of Object.entries(unProducto)){
    console.log(llave)
    console.log(valor)
}
