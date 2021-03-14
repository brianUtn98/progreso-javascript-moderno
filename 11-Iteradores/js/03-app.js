//Reto del fizz buzz. 
//Tenemos 100 numeros. Los multiplos de 3 imprimir fizz, los de 5 imprimir buzz. Los que son multiplos de ambos FIZZBUZZ

for(i = 0; i < 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FIZZBUZZ!`)
    } else if(i % 3 == 0){
        console.log(`${i} FIZZ`)
    } else if(i % 5 == 0){
        console.log(`${i} BUZZ`)
    } else{
        console.log(i)
    }
}