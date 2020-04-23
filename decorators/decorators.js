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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(a, b) {
    return function (_) {
        console.log(a + ' ' + b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregado');
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = this;
            console.log('Antes...');
            _this = _super.apply(this, args) || this;
            console.log('Depois...');
            return _this;
        }
        return class_1;
    }(construtor));
}
// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()
// @logarClasse
// @logarClasseSe(true)
// @decorator('Oi', 123)
var Eletrodomestico = /** @class */ (function () {
    function Eletrodomestico() {
        console.log('novo...');
    }
    Eletrodomestico = __decorate([
        logarObjeto,
        imprimivel
    ], Eletrodomestico);
    return Eletrodomestico;
}());
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
var eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
var ContaCorrente = /** @class */ (function () {
    function ContaCorrente(saldo) {
        this.saldo = saldo;
    }
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    };
    ContaCorrente.prototype.getSaldo = function () {
        return this.saldo;
    };
    __decorate([
        naoNegativo
    ], ContaCorrente.prototype, "saldo", void 0);
    __decorate([
        congelar,
        __param(0, paramInfo)
    ], ContaCorrente.prototype, "sacar", null);
    __decorate([
        congelar
    ], ContaCorrente.prototype, "getSaldo", null);
    return ContaCorrente;
}());
var cc = new ContaCorrente(10000);
cc.sacar(5000);
cc.sacar(5000);
console.log(cc.getSaldo());
// cc.getSaldo = function() {
//   return this['saldo'] + 7000
// }
// console.log(cc.getSaldo())
function congelar(alvo, nomePropriedade, descritor) {
    console.log('Alvo', alvo);
    console.log('Nome', nomePropriedade);
    descritor.writable = false;
}
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo['_' + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Salvo Inválido!');
            }
            else {
                alvo['_' + nomePropriedade] = valor;
            }
        }
    });
}
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log("Alvo " + alvo);
    console.log("M\u00E9todo " + nomeMetodo);
    console.log("\u00CDndice " + indiceParam);
}
//# sourceMappingURL=decorators.js.map