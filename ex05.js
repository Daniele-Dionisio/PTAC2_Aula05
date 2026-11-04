console.log(1);
async function rodar() {
  await Promise.resolve().then(() => console.log(2)); 
}
rodar();
console.log(3);

//Ordem prevista: 1, 3, 2
//Ordem executada 1, 3, 2
// O "console.log(3)" executa antes da função async pois, a função retorna uma promise, que é executada após o código sincrono.
