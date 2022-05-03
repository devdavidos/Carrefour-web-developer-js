var idxPar = 0;
var idxImpar = 0;
var vPar = [];
var vImpar = [];

var totalItems = gets();
for (var i = 0; i < totalItems; i++) {
    let itens = gets();
    funcParImpar(parseInt(itens));
}

function funcParImpar(n) {
    (n % 2 === 0) ? vPar[++idxPar] = n: vImpar[++idxImpar] = n;
}

vPar.sort((a, b) => a - b).forEach(function(item) {
    console.log(item);
});

vImpar.sort((a, b) => a - b).reverse().forEach(function(item) {
    console.log(item);
});