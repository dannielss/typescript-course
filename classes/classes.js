"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var aniversario = new Data(3);
console.table(aniversario);
var DataEsperta = /** @class */ (function () {
    function DataEsperta(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return DataEsperta;
}());
var aniversarioEsperto = new DataEsperta(3, 3, 2000);
console.table(aniversarioEsperto);
// challenge
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Produto.prototype.resumo = function () {
        return this.nome + " custa R$ " + this.metodoComDesconto() + " (" + (this.desconto > 0 ? this.desconto * 100 + '% off' : 'Não possui desconto') + ")";
    };
    Produto.prototype.metodoComDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    return Produto;
}());
var produto1 = new Produto('Arroz', 16);
console.log(produto1);
var produto2 = new Produto('Celular', 1600, 0.2);
console.log(produto2);
console.log(produto1.resumo());
console.log(produto2.resumo());
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this._idade = 0;
    }
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (valor) {
            if (valor >= 0 && valor <= 120) {
                this._idade = valor;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Pessoa;
}());
var pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1);
pessoa1.idade = -3;
console.log(pessoa1);
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.areaCirc = function (raio) {
        return this.PI * raio * raio;
    };
    Matematica.PI = 3.1416;
    return Matematica;
}());
// const m1 = new Matematica
// console.log(m1.areaCirc(4))
console.log(Matematica.areaCirc(4));
//# sourceMappingURL=classes.js.map