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

async function sumaAsync(a, b) {
    return Promise.resolve(suma(a, b))
}

async function test(mensaje, callback) {
    try {
        await callback();
        console.log(`El test ${mensaje} se ejecutó correctamente`)
    } catch (error) {
        console.error("Error:")
        console.error(error)
    }
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

let resultado = suma(1, 2);

expected(4).toBe(resultado)

test("Suma 10 + 20 -> Resultado 30", async() => {
    const resultado = await sumaAsync(10, 20)
    const esperado = 30;
    expected(esperado).toBe(resultado)
})