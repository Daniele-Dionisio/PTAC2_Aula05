console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");

//Ordem prevista: A,C,B
//Ordem da execução A,C,B


