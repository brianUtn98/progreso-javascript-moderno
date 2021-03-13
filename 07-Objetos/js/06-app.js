const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            alto: '50cm'
        },
        fabricacion: {
            pais: 'China',
            calidad: 'Gama media',
            marca: 'Samsung'
        }
    }
}

//Destructuring con sub-objetos

const {  informacion, informacion: {fabricacion} } = producto

console.log(informacion.fabricacion.calidad)
console.log(fabricacion.calidad)