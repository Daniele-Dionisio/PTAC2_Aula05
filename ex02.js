console.log("A");
setTimeout(() => console.log("E"), 150);
setTimeout(() => console.log("I"), 0);
console.log("O");

//Ordem prevista: A, O, I, E
//Ordem da execução A, O, I, E