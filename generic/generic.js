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
// Array
function imprimir(args) {
    args.forEach(function (elemento) { return console.log(elemento); });
}
imprimir([10, 20, 30, 40]);
imprimir([10, 20, 30, 40]);
imprimir(['Carlos', 'Bia', 'Number']);
imprimir([
    { nome: 'Carlos', idade: 17 },
    { nome: 'Bia', idade: 28 }
]);
//# sourceMappingURL=generic.js.map