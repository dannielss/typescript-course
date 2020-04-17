"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('joão'));
// Usando generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('joão'));
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
// Generics disponiveis na API
var avaliacoes = [10, 9, 9.3, 7.7];
avaliacoes.push(8.5);
console.log(avaliacoes);
//# sourceMappingURL=generic.js.map