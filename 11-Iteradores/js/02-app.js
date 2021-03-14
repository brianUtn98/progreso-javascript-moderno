
//Crear un for loop que al tetectar el 5 pare la ejecución
for(let i = 0; i < 20; i++){
    if(i == 5){
        console.log("Encontre el 5!")
        break;
    }
    console.log(i);
}

//Crear un programa que muestre todos los numeros del 0 al 20, pero los pares diga "PAR"

for(i = 0; i <= 20;i++){
    if( i % 2 == 0){
        console.log("PAR")
        continue;
    }
    console.log(i)
}