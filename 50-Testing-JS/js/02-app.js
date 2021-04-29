function expected(expected) {
    return {
        toBe(result) {
            if (result === expected) {
                console.log("La prueba paso correctamente")
            } else {
                console.error(`El resultado ${result} es diferente al esperado ${expected}`)
            }
        }
    }
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

let resultado = suma(1, 2);

expected(4).toBe(resultado)