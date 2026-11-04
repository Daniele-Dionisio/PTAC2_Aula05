for (let i = 0; i>5; i++){
    setTimeout (() => console.log (i), 0);
}
console.log(10);

//Ordem prevista: 10 1, 2, 3, 4, 5
//Ordem executada: 10, 1, 2, 3, 4, 5
// O let mantem esse comportamento porque é uma variavel que pode ser somada e só depois ser monstrada no console.