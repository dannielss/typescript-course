"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Class com generics
var OperacaoBinaria = /** @class */ (function () {
    function OperacaoBinaria(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    return OperacaoBinaria;
}());
// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(1, 2).executar())
// console.log(new OperacaoBinaria({}, {}).executar())
var SomaBinaria = /** @class */ (function (_super) {
    __extends(SomaBinaria, _super);
    function SomaBinaria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SomaBinaria.prototype.executar = function () {
        return this.operando1 + this.operando2;
    };
    return SomaBinaria;
}(OperacaoBinaria));
console.log(new SomaBinaria(3, 4).executar());
var DiferencaEntreDatas = /** @class */ (function (_super) {
    __extends(DiferencaEntreDatas, _super);
    function DiferencaEntreDatas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiferencaEntreDatas.prototype.getTime = function (data) {
        var dia = data.dia, mes = data.mes, ano = data.ano;
        return new Date(mes + "/" + dia + "/" + ano).getTime();
    };
    DiferencaEntreDatas.prototype.executar = function () {
        var t1 = this.getTime(this.operando1);
        var t2 = this.getTime(this.operando2);
        var diferenca = Math.abs(t1 - t2);
        var dia = 1000 * 60 * 60 * 24;
        return Math.ceil(diferenca / dia) + " dia(s)";
    };
    return DiferencaEntreDatas;
}(OperacaoBinaria));
var d1 = new Data(1, 2, 2020);
var d2 = new Data(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// Challenge
var Fila = /** @class */ (function () {
    function Fila() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.fila = args;
    }
    Fila.prototype.entrar = function (elemento) {
        this.fila.push(elemento);
    };
    Fila.prototype.proximo = function () {
        if (this.fila.length >= 0 && this.fila[0]) {
            var primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    };
    Fila.prototype.imprimir = function () {
        console.log(this.fila);
    };
    return Fila;
}());
var fila = new Fila('Gui', 'Leo', 'Julio');
fila.entrar('Ana');
fila.imprimir();
fila.proximo();
fila.imprimir();
fila.proximo();
fila.proximo();
fila.proximo();
fila.proximo();
fila.imprimir();
//# sourceMappingURL=generic.js.map