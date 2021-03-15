const numeros3 = [1, 2, 3, 4, 5];

console.table(numeros3);

for (let i = 0; i < numeros3.length; i++) {
  console.log(numeros3[i]);
}

//Yo lo haría así:

numeros3.forEach((elem) => console.log(elem));
