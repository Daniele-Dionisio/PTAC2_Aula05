setTimeout(() => console.log(1), 100);
Promise.resolve()
.then(() => console.log (2))
.then(() => console.log (3));
console.log (4);

//Ordem prevista: 4, 1, 2, 3
//Ordem da execução: 4, 2, 3, 1