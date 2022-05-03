// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let linhas = parseInt(gets());

//TODO: Complete os espaços em branco com uma solução possível para o problema.

//let limit = parseInt(gets());

for (let i = 1; i <= linhas; i++) {
  let X =(Math.pow(i,2));
  let Y = (Math.pow(i,3));

  print(i + " "+ X + " " + Y);
}