"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
var pessoa = {
    nome: 'João',
    idade: 25
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//# sourceMappingURL=interface.js.map