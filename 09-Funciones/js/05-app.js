function doble(numero){ //numero es el valor representativo.
    console.log(numero*2)
}

doble(4) //4 es el argumento

function saludar(nombre,apellido) { 
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar("Brian","Monroy")
saludar("Brian") //Hola Brian Undefined
saludar() // Hola Undefined Undefined